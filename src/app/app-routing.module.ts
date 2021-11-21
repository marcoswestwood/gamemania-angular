import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { OculosvrComponent } from './views/oculosvr/oculosvr.component';
import { PcgamersComponent } from './views/pcgamers/pcgamers.component';
import { LoginComponent } from "./views/login/login.component";


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "acessorios", component: AcessoriosComponent },
  { path: "celulares", component: CelularesComponent },
  { path: "computadores", component: ComputadoresComponent },
  { path: "consoles", component: ConsolesComponent },
  { path: "jogos", component: JogosComponent },
  { path: "oculosvr", component: OculosvrComponent },
  { path: "pcgamers", component: PcgamersComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
