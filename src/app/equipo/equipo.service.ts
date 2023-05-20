import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';
import { map } from 'rxjs/operators';
import { EquipoDetail } from './equipo-detail';

@Injectable({
 providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.baseUrl2;

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<EquipoDetail[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => this.extractEquipos(response))
    );
  }

  private extractEquipos(response: any): Equipo[] {
    const equipos: Equipo[] = [];
    response.groups.forEach((group: any) => {
      group.teams.forEach((team: any) => {
        const equipo: Equipo = {
          name: team.name,
          country: team.country,
          group_letter: team.group_letter,
          group_points: team.group_points,
          games_played: team.games_played,
          wins: team.wins,
          draws: team.draws,
          losses: team.losses,
          goals_for: team.goals_for,
          goals_against: team.goals_against,
          goal_differential: team.goal_differential,

        };
        equipos.push(equipo);
      });
    });
    return equipos;
  }
}
