import { Component, OnInit } from '@angular/core';
import { Computador } from 'src/app/models/computador';
import { ComputadorService } from 'src/app/services/computador.service';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css']
})
export class ComputadoresComponent implements OnInit {

  listaComputadores = [] as Computador[];

  constructor(private computadorService: ComputadorService) { }


  ngOnInit(): void {
    this.carregarComputadores();
  }

  carregarComputadores() {
    this.computadorService.getComputadores().subscribe( (computadoresRecebidos: Computador[]) => {
      this.listaComputadores = computadoresRecebidos;
      console.log(this.listaComputadores)
    })
  }
}
