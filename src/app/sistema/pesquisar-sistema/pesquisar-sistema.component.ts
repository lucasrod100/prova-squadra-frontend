import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pesquisar-sistema',
  templateUrl: './pesquisar-sistema.component.html'
})
export class PesquisarSistemaComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.carregarFormularioPesquisa();
  }

  carregarFormularioPesquisa() {
    this.formulario = new FormGroup({
      descricao: new FormControl(''),
      sigla: new FormControl(''),
      email: new FormControl(''),
    });
  }

  setarFormularioPesquisa(dados: any) {
    this.formulario.controls.descricao.setValue(dados.descricao);
    this.formulario.controls.sigla.setValue(dados.sigla);
    this.formulario.controls.email.setValue(dados.email);
  }

}
