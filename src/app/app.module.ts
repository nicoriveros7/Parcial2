import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidoModule } from './partido/partido.module';
import { HomeTeamModule } from './homeTeam/homeTeam.module';
import { AwayTeamModule } from './awayTeam/awayTeam.module';
import { EquipoModule } from './equipo/equipo.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidoModule,
    HomeTeamModule,
    AwayTeamModule,
    HttpClientModule,
    EquipoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
