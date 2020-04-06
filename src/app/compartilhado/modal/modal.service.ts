import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  abrir(tipo: string, mensagem: string) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.tipo = tipo;
    this.bsModalRef.content.mensagem = mensagem;
  }

  fechar(callback) {
    this.modalService.onHide.subscribe(() => {
      return callback();
    });
  }
}
