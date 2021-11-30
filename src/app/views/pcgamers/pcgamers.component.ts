import { Component, OnInit } from '@angular/core';
import { Pcgamer } from 'src/app/models/pcgamer';
import { PcgamerService } from 'src/app/services/pcgamer.service';

@Component({
  selector: 'app-pcgamers',
  templateUrl: './pcgamers.component.html',
  styleUrls: ['./pcgamers.component.css']
})
export class PcgamersComponent implements OnInit {

  listaPcgamers = [] as Pcgamer[];

  constructor(private pcgamerService: PcgamerService) { }

  ngOnInit(): void {
    this.carregarPcgamers();
  }

  carregarPcgamers() {
    this.pcgamerService.getPcgamers().subscribe( (pcgamersRecebidos: Pcgamer[]) => {
      this.listaPcgamers = pcgamersRecebidos;
      console.log(this.listaPcgamers)
    })
  }
}
