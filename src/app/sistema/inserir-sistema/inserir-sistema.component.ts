import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpSistemaService } from './../http-sistema.service';
import { ModalService } from './../../compartilhado/modal/modal.service';

@Component({
  selector: 'app-inserir-sistema',
  templateUrl: './inserir-sistema.component.html'
})
export class InserirSistemaComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private http: HttpSistemaService,
    private modal: ModalService,
    private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      descricao: new FormControl(''),
      sigla: new FormControl(''),
      email: new FormControl(''),
      url: new FormControl('')
    });
  }

  salvar() {
    this.http.build().inserir(this.formulario.value)
      .subscribe((resultado: any) => {
        console.log(resultado);
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
