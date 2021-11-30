import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acessorio } from '../models/acessorio';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {

  url = "http://localhost:3000/acessorios";

  constructor(private httpAcessorios: HttpClient) { }

  httpOptionsAcessorios = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getAcessorios(): Observable<Acessorio[]> {
    return this.httpAcessorios.get<Acessorio[]>(this.url)
  }

}
