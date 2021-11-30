import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celular } from '../models/celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  url = "http://localhost:3000/celulares";

  constructor(private httpCelulares: HttpClient) { }

  httpOptionsCelulares = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  }

  getCelulares(): Observable<Celular[]> {
    return this.httpCelulares.get<Celular[]>(this.url)
  }
}
