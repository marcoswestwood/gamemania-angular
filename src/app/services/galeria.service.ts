import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Galeria } from '../models/galeria';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  url = "http://localhost:3000/galeria";

  constructor(private httpGaleria: HttpClient) { }

  httpOptionsGaleria = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getGaleria(): Observable<Galeria[]> {
    return this.httpGaleria.get<Galeria[]>(this.url)
  }

}
