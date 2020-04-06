import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class HttpService {

  urlPadral = 'http://localhost:8000/api/';
  url: string;
  rota: string;

  constructor(protected http: HttpClient) { }

  build(rota = null) {
    if (rota !== null) {
      this.url = this.urlPadral + rota;
    } else {
      this.url = this.urlPadral + this.rota;
    }

    return this;
  }

  listar(param = null) {
    if (param) {
      this.url = this.url + '?' + param;
    }
    return this.http.get(this.url);
  }

  inserir(dados) {
    return this.http.post(this.url, dados);
  }

  exibir(id) {
    return this.http.get(this.url + '/' + id);
  }

  alterar(dados, id) {
    return this.http.put(this.url + '/' + id, dados);
  }

  remover() {
    return this.http.delete(this.url);
  }
}
