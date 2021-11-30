import { Component, OnInit } from '@angular/core';
import { Oculosvr } from 'src/app/models/oculosvr';
import { OculosvrService } from 'src/app/services/oculosvr.service';

@Component({
  selector: 'app-oculosvr',
  templateUrl: './oculosvr.component.html',
  styleUrls: ['./oculosvr.component.css']
})
export class OculosvrComponent implements OnInit {

  listaOculosvr = [] as Oculosvr[];

  constructor(private oculosvrService: OculosvrService) { }

  ngOnInit(): void {
    this.carregarOculosvr();
  }

  carregarOculosvr() {
    this.oculosvrService.getOculosvr().subscribe( (oculosvrRecebidos: Oculosvr[]) => {
      this.listaOculosvr = oculosvrRecebidos;
      console.log(this.listaOculosvr)
    })
  }
}
