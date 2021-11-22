import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { AcessoriosComponent } from './views/acessorios/acessorios.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { OculosvrComponent } from './views/oculosvr/oculosvr.component';
import { PcgamersComponent } from './views/pcgamers/pcgamers.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcessoriosComponent,
    CelularesComponent,
    ComputadoresComponent,
    ConsolesComponent,
    JogosComponent,
    OculosvrComponent,
    PcgamersComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
