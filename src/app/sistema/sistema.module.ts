import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SistemaComponent } from './sistema.component';
import { PesquisarSistemaComponent } from './pesquisar-sistema/pesquisar-sistema.component';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { InserirSistemaComponent } from './inserir-sistema/inserir-sistema.component';
import { AlterarSistemaComponent } from './alterar-sistema/alterar-sistema.component';
import { HistoricoSistemaService } from './historico-sistema.service';


@NgModule({
  declarations: [SistemaComponent, PesquisarSistemaComponent, InserirSistemaComponent, AlterarSistemaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompartilhadoModule,
    RouterModule
  ],
  providers: [HistoricoSistemaService],
})
export class SistemaModule { }
