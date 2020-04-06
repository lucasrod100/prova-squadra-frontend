import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginacaoComponent } from './paginacao/paginacao.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [PaginacaoComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [PaginacaoComponent, ModalComponent],
  entryComponents: [ModalComponent]
})
export class CompartilhadoModule { }
