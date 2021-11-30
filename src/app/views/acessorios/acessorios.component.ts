import { Component, OnInit } from '@angular/core';
import { Acessorio } from 'src/app/models/acessorio';
import { AcessorioService } from 'src/app/services/acessorio.service';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.component.html',
  styleUrls: ['./acessorios.component.css']
})
export class AcessoriosComponent implements OnInit {

  listaAcessorios = [] as Acessorio[];

  constructor(private acessorioService: AcessorioService) { }

  ngOnInit(): void {
    this.carregarAcessorios();
  }

  carregarAcessorios() {
    this.acessorioService.getAcessorios().subscribe( (acessoriosRecebidos: Acessorio[]) => {
      this.listaAcessorios = acessoriosRecebidos;
      console.log(this.listaAcessorios)
    })
  }

}
