import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  url = "http://localhost:3000/jogos";

  constructor(private httpJogos: HttpClient) { }

  httpOptionsJogos = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getJogos(): Observable<Jogo[]> {
    return this.httpJogos.get<Jogo[]>(this.url)
  }

}
