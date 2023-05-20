import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = [];
  golesPorPais: Array<{ pais: string, goles: number }> = [];


  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      this.calcularGolesPorPais();
    });
  }

  calcularGolesPorPais(): void {
    const golesPorPaisMap = new Map<string, number>();

    for (const partido of this.partidos) {
      const pais = partido.home_team.name;
      const goles = partido.home_team.goals;

      if (goles !== undefined && !isNaN(goles)) {
        if (golesPorPaisMap.has(pais)) {
          golesPorPaisMap.set(pais, golesPorPaisMap.get(pais)! + goles);
        } else {
          golesPorPaisMap.set(pais, goles);
        }
      }
    }

    this.golesPorPais = Array.from(golesPorPaisMap.entries()).map(([pais, goles]) => ({ pais, goles }));
    this.golesPorPais.sort((a, b) => b.goles - a.goles);
  }

  ngOnInit() {
    this.getPartidos();
  }

 }
