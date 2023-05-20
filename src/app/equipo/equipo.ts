export class Equipo {
   name: string;
     country: string;
     group_letter: string;
     group_points: number;
     games_played: number;
     wins: number;
     draws: number;
     losses: number;
     goals_for: number;
     goals_against: number;
     goal_differential: number;

  constructor(
     name: string,
     country: string,
     group_letter: string,
     group_points: number,
     games_played: number,
     wins: number,
     draws: number,
     losses: number,
     goals_for: number,
     goals_against: number,
     goal_differential: number
  ) {

    this.name = name;
    this.country = country;
    this.group_letter = group_letter;
    this.group_points = group_points;
    this.games_played = games_played;
    this.wins = wins;
    this.draws = draws;
    this.name = name;
    this.losses = losses;
    this.goals_for = goals_for;
    this.goals_against = goals_against;
    this.goal_differential = goal_differential;
  }
 }
