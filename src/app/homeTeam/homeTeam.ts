export class HomeTeam {
  country: number;
  goals: number;
  name: string;
  penalties: number;

  constructor(country: number, goals: number, name: string, penalties: number) {
    this.country = country;
    this.goals = goals;
    this.name = name;
    this.penalties = penalties;
  }
 }
