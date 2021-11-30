import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computador } from '../models/computador';

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {

  url = "http://localhost:3000/computadores";

  constructor(private httpComputadores: HttpClient) { }

  httpOptionsComputadores = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getComputadores(): Observable<Computador[]> {
    return this.httpComputadores.get<Computador[]>(this.url)
  }
}
