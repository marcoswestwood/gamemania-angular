import { Component, OnInit } from '@angular/core';
import { Celular } from 'src/app/models/celular';
import { CelularService } from 'src/app/services/celular.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {

  listaCelulares = [] as Celular[];

  constructor(private celularService: CelularService) { }

  ngOnInit(): void {
    this.carregarCelulares();
  }

  carregarCelulares() {
    this.celularService.getCelulares().subscribe( (celularesRecebidos: Celular[]) => {
      this.listaCelulares = celularesRecebidos;
    })
  }

}
