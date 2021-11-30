import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pcgamer } from '../models/pcgamer';

@Injectable({
  providedIn: 'root'
})
export class PcgamerService {

  url = "http://localhost:3000/pcgamers";

  constructor(private httpPcgamers: HttpClient) { }

  httpOptionsPcgamers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPcgamers(): Observable<Pcgamer[]> {
    return this.httpPcgamers.get<Pcgamer[]> (this.url)
  }
}
