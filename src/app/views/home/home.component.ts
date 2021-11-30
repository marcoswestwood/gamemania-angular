import { Component, OnInit } from '@angular/core';
import { Galeria } from 'src/app/models/galeria';
import { Novidade } from 'src/app/models/novidade';
import { GaleriaService } from 'src/app/services/galeria.service';
import { NovidadeService } from 'src/app/services/novidade.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaNovidades = [] as Novidade[];

  listaGaleria = [] as Galeria[];

  constructor(private novidadeService: NovidadeService, private galeriaService: GaleriaService ) { }

  ngOnInit(): void {
    this.carregarNovidades();
    this.carregarGaleria();
  }
  
  carregarNovidades() {
    this.novidadeService.getNovidades().subscribe( (novidadesRecebidas: Novidade[]) => {
      this.listaNovidades = novidadesRecebidas;
    } )
  }

  carregarGaleria() {
    this.galeriaService.getGaleria().subscribe( (galeriaRecebida: Galeria[]) => {
      this.listaGaleria = galeriaRecebida
      console.log(this.carregarGaleria)
    })
  }
  

  
}


