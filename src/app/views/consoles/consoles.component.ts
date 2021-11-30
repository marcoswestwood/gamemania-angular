import { Component, OnInit } from '@angular/core';
import { Console } from 'src/app/models/console';
import { ConsoleService } from 'src/app/services/console.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  listaConsoles = [] as Console[];

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    this.carregarConsoles();
  }

  carregarConsoles() {
    this.consoleService.getConsoles().subscribe( (consolesRecebidos: Console[]) => {
      this.listaConsoles = consolesRecebidos;
      console.log(this.listaConsoles)
    })
  }
}
