import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novidade } from '../models/novidade';

@Injectable({
  providedIn: 'root'
})
export class NovidadeService {

  url = "http://localhost:3000/novidades"

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getNovidades(): Observable<Novidade[]> {
    return this.httpClient.get<Novidade[]>(this.url)
  }

}
