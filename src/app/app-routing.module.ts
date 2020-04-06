import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SistemaComponent } from './sistema/sistema.component';
import { InserirSistemaComponent } from './sistema/inserir-sistema/inserir-sistema.component';
import { AlterarSistemaComponent } from './sistema/alterar-sistema/alterar-sistema.component';

const routes: Routes = [
  { path: '', redirectTo: 'sistema', pathMatch: 'full' },
  { path: 'sistema', component: SistemaComponent },
  { path: 'sistema/inserir', component: InserirSistemaComponent },
  { path: 'sistema/:id/alterar', component: AlterarSistemaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
