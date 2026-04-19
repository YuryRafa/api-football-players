import { ClubModel } from "../models/club-model";

const database =  [
  { "id": 1, "name": "Real Madrid", "country": "Spain" },
  { "id": 2, "name": "Barcelona", "country": "Spain" },
  { "id": 3, "name": "Atletico Madrid", "country": "Spain" },
  { "id": 4, "name": "Sevilla", "country": "Spain" },
  { "id": 5, "name": "Manchester United", "country": "England" },
  { "id": 6, "name": "Manchester City", "country": "England" },
  { "id": 7, "name": "Liverpool", "country": "England" },
  { "id": 8, "name": "Chelsea", "country": "England" },
  { "id": 9, "name": "Arsenal", "country": "England" },
  { "id": 10, "name": "Tottenham Hotspur", "country": "England" },
  { "id": 11, "name": "Bayern Munich", "country": "Germany" },
  { "id": 12, "name": "Borussia Dortmund", "country": "Germany" },
  { "id": 13, "name": "RB Leipzig", "country": "Germany" },
  { "id": 14, "name": "Bayer Leverkusen", "country": "Germany" },
  { "id": 15, "name": "Paris Saint-Germain", "country": "France" },
  { "id": 16, "name": "Marseille", "country": "France" },
  { "id": 17, "name": "Lyon", "country": "France" },
  { "id": 18, "name": "Monaco", "country": "France" },
  { "id": 19, "name": "Juventus", "country": "Italy" },
  { "id": 20, "name": "AC Milan", "country": "Italy" },
  { "id": 21, "name": "Inter Milan", "country": "Italy" },
  { "id": 22, "name": "Napoli", "country": "Italy" },
  { "id": 23, "name": "Roma", "country": "Italy" },
  { "id": 24, "name": "Lazio", "country": "Italy" },
  { "id": 25, "name": "Ajax", "country": "Netherlands" },
  { "id": 26, "name": "PSV Eindhoven", "country": "Netherlands" },
  { "id": 27, "name": "Feyenoord", "country": "Netherlands" },
  { "id": 28, "name": "Porto", "country": "Portugal" },
  { "id": 29, "name": "Benfica", "country": "Portugal" },
  { "id": 30, "name": "Sporting CP", "country": "Portugal" }
]


export const findAllClubs = async (): Promise<ClubModel[]> => {
    return database;
};