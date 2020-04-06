import { HttpSistemaService } from './sistema/http-sistema.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SistemaModule } from './sistema/sistema.module';
import { AppRoutingModule } from './app-routing.module';
import { CompartilhadoModule } from './compartilhado/compartilhado.module';
import { ModalService } from './compartilhado/modal/modal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SistemaModule,
    AppRoutingModule,
    HttpClientModule,
    CompartilhadoModule,
    ModalModule.forRoot()
  ],
  providers: [HttpSistemaService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
