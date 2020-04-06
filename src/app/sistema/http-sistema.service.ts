import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpSistemaService extends HttpService {

  constructor(http: HttpClient) {
    super(http);
    this.rota = 'sistema';
  }

  pesquisarSistemas(pesquisa: any, pagina = null) {
    let param = 'descricao=' + pesquisa.descricao
      + '&sigla=' + pesquisa.sigla
      + '&email=' + pesquisa.email;

    if (pagina != null) {
      param += '&page=' + pagina;
    }

    return this.build().listar(param);
  }

}
