import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpSistemaService } from './../http-sistema.service';
import { ModalService } from './../../compartilhado/modal/modal.service';

@Component({
  selector: 'app-alterar-sistema',
  templateUrl: './alterar-sistema.component.html'
})
export class AlterarSistemaComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private http: HttpSistemaService,
    private modal: ModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      descricao: new FormControl(''),
      sigla: new FormControl(''),
      email: new FormControl(''),
      url: new FormControl(''),
      status: new FormControl(''),
      usuario: new FormControl(''),
      data: new FormControl(''),
      justificativa: new FormControl(''),
      justificativaAlteracao: new FormControl(''),
    });

    this.http.build().exibir(this.route.snapshot.params.id)
      .subscribe((sistema: any) => {
        console.log(sistema);
        this.setarDadosFormulario(sistema);
      }, (error: any) => {
        this.modal.abrir('danger', error.error.mensagem);
        this.modal.fechar(() => {
          this.router.navigate(['/sistema']);
        });
      }
      );
  }

  setarDadosFormulario(sistema) {
    let status = 1;
    if (!sistema.status) {
      status = 0;
    }
    this.formulario = new FormGroup({
      descricao: new FormControl(sistema.descricao),
      sigla: new FormControl(sistema.sigla),
      email: new FormControl(sistema.email),
      url: new FormControl(sistema.url),
      status: new FormControl(status),
      usuario: new FormControl(sistema.usuario_alteracao != null ? sistema.usuario_alteracao : ''),
      data: new FormControl(sistema.data_hora_alteracao),
      justificativa: new FormControl(sistema.justificativa_alteracao),
      justificativaAlteracao: new FormControl(''),
    });
  }

  salvar() {
    this.http.build().alterar(this.formulario.value, this.route.snapshot.params.id)
      .subscribe((resultado: any) => {
        this.modal.abrir('success', 'Operação realizada com sucesso.');

        this.modal.fechar(() => {
          this.router.navigate(['/sistema']);
        });
      }, (error: any) => {
        this.modal.abrir('danger', error.error.mensagem);
      }
      );
  }

}
