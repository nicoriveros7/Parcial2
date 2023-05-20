import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { EquipoDetail } from '../equipo-detail';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {


  selectedEquipo!: EquipoDetail;
  selected: Boolean = false;

  equipos: Array<Equipo> = [];

  constructor(private equipoService: EquipoService) { }

  onSelected(equipo: EquipoDetail): void {
    this.selected = true;
    this.selectedEquipo = equipo;
  }

 getEquipos(): void {
   this.equipoService.getEquipos().subscribe((equipos) => {
     this.equipos = equipos;
   });
 }

 ngOnInit() {
   this.getEquipos();
 }

}
