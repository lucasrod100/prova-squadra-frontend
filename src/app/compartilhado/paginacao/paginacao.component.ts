import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input() primeiraPagina: number;
  @Input() currentPagina: number;
  @Input() lastPagina: number;
  @Input() totalPaginas: number;
  paginas: number[] = [];

  @Output() changePaginas = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  carregarPaginas() {
    let inicio;
    let final;
    this.paginas = [];
    let primeiraPaginaMaisUm;
    let primeiraPaginaMenosUm;

    if (this.lastPagina <= this.totalPaginas) {
      inicio = 1;
      final = this.lastPagina;
    } else if (this.currentPagina === this.lastPagina) {
      inicio = this.lastPagina - (this.totalPaginas - 1);
      final = this.lastPagina;
    } else if (this.currentPagina === 1) {
      inicio = 1;
      final = this.totalPaginas;
    } else {
      primeiraPaginaMaisUm = this.primeiraPagina + 1;
      if (this.isEntrePaginas(this.primeiraPagina)) {
        inicio = this.primeiraPagina;
        final = (this.primeiraPagina + (this.totalPaginas - 1));
      } else if (this.isEntrePaginas(primeiraPaginaMaisUm)) {
        inicio = primeiraPaginaMaisUm;
        final = (primeiraPaginaMaisUm + (this.totalPaginas - 1));
      } else if (this.primeiraPagina > 1) {
        primeiraPaginaMenosUm = this.primeiraPagina - 1;
        if (this.isEntrePaginas(primeiraPaginaMenosUm)) {
          inicio = primeiraPaginaMenosUm;
          final = (primeiraPaginaMenosUm + (this.totalPaginas - 1));
        }
      }
    }

    for (let pagina = inicio; pagina <= final; pagina++) {
      this.paginas.push(pagina);
    }
  }

  isEntrePaginas(primeiraPagina: number): boolean {
    if (this.currentPagina >= primeiraPagina && this.currentPagina <= (primeiraPagina + (this.totalPaginas - 1))) {
      return true;
    } else {
      return false;
    }
  }

  carregarPagina(page) {
    const change: any = { primeiraPagina: this.paginas[0], pagina: page };
    this.changePaginas.emit(change);
  }

  getPaginas() {
    this.carregarPaginas();
    return this.paginas;
  }
}
