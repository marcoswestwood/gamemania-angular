import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Console } from '../models/console';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  url = "http://localhost:3000/consoles";

  constructor(private httpConsoles: HttpClient) { }

  httpOptionsConsoles = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getConsoles(): Observable<Console[]> {
    return this.httpConsoles.get<Console[]>(this.url)
  }
}
