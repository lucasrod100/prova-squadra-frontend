import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input() tipo: string;
  @Input() mensagem: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
