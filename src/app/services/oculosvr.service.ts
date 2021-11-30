import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oculosvr } from '../models/oculosvr';

@Injectable({
  providedIn: 'root'
})
export class OculosvrService {

  url = "http://localhost:3000/oculosvr";

  constructor(private httpOculosvr: HttpClient) { }

  httpOptionsOculosvr = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getOculosvr(): Observable<Oculosvr[]> {
    return this.httpOculosvr.get<Oculosvr[]>(this.url)
  }
}
