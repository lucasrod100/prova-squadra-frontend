import { HttpSistemaService } from './http-sistema.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Sistema } from './../models/sistema.model';
import { Paginacao } from './../models/paginacao.model';
import { PesquisarSistemaComponent } from './pesquisar-sistema/pesquisar-sistema.component';
import { ModalService } from './../compartilhado/modal/modal.service';
import { HistoricoSistemaService } from './historico-sistema.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {

  public sistemas: Paginacao;
  @ViewChild(PesquisarSistemaComponent, { static: true }) filtro: PesquisarSistemaComponent;
  primeiraPagina: number;

  constructor(
    private http: HttpSistemaService,
    private modal: ModalService,
    private historico: HistoricoSistemaService
  ) { }

  ngOnInit() {
    if (this.historico.status) {
      this.primeiraPagina = this.historico.primeiraPagina;
      this.getSistemas(this.historico.campos, this.historico.pagina);
    } else {
      this.primeiraPagina = 1;
    }
  }

  pesquisar() {
    this.getSistemas(this.filtro.formulario.value, 1);
  }

  getSistemas(filtro, pagina) {
    this.historico.limparHistorico();

    this.http.pesquisarSistemas(filtro, pagina)
      .subscribe((resultado: any) => {

        if (resultado.total > 0) {
          this.sistemas = {
            currentPage: resultado.current_page,
            lastPage: resultado.last_page,
            data: resultado.data,
            total: resultado.total
          };

          this.historico.setHistorico(this.primeiraPagina, this.sistemas.currentPage, filtro);
          this.filtro.setarFormularioPesquisa(this.historico.campos);
        } else {
          this.sistemas = null;
          this.modal.abrir('danger', 'Nenhum Sistema foi encontrado. Favor revisar os critérios da sua pesquisa!');
        }
      },
        (error: any) => {
          this.modal.abrir('danger', error.error.mensagem);
        }
      );
  }

  carregarPagina(pagina) {
    this.primeiraPagina = pagina.primeiraPagina;
    this.getSistemas(this.filtro.formulario.value, pagina.pagina);
  }

  limpar() {
    this.sistemas = null;
    this.historico.limparHistorico();
    this.filtro.carregarFormularioPesquisa();
  }

}
