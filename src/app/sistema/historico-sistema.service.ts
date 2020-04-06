import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoSistemaService {

  status = false;
  pagina: number;
  primeiraPagina: number;
  campos: any;

  constructor() { }

  setHistorico(primeiraPagina, pagina, campos) {
    this.primeiraPagina = primeiraPagina;
    this.pagina = pagina;
    this.campos = campos;
    this.status = true;
  }

  limparHistorico() {
    this.status = false;
    this.campos = null;
    this.pagina = null;
    this.primeiraPagina = null;
  }
}
