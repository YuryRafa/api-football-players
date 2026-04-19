import { PlayerModel, UpdatePlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "nationality": "France",
    "position": "Forward"
  },
  {
    "id": 2,
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "nationality": "England",
    "position": "Midfielder"
  },
  {
    "id": 3,
    "name": "Vinícius Jr",
    "club": "Real Madrid",
    "nationality": "Brazil",
    "position": "Forward"
  },
  {
    "id": 4,
    "name": "Erling Haaland",
    "club": "Manchester City",
    "nationality": "Norway",
    "position": "Forward"
  },
  {
    "id": 5,
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "nationality": "Belgium",
    "position": "Midfielder"
  },
  {
    "id": 6,
    "name": "Phil Foden",
    "club": "Manchester City",
    "nationality": "England",
    "position": "Midfielder"
  },
  {
    "id": 7,
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "nationality": "England",
    "position": "Forward"
  },
  {
    "id": 8,
    "name": "Jamal Musiala",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Midfielder"
  },
  {
    "id": 9,
    "name": "Joshua Kimmich",
    "club": "Bayern Munich",
    "nationality": "Germany",
    "position": "Midfielder"
  },
  {
    "id": 10,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "Forward"
  },
  {
    "id": 11,
    "name": "Pedri",
    "club": "Barcelona",
    "nationality": "Spain",
    "position": "Midfielder"
  },
  {
    "id": 12,
    "name": "Frenkie de Jong",
    "club": "Barcelona",
    "nationality": "Netherlands",
    "position": "Midfielder"
  },
  {
    "id": 13,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward"
  },
  {
    "id": 14,
    "name": "Bukayo Saka",
    "club": "Arsenal",
    "nationality": "England",
    "position": "Forward"
  },
  {
    "id": 15,
    "name": "Martin Ødegaard",
    "club": "Arsenal",
    "nationality": "Norway",
    "position": "Midfielder"
  },
  {
    "id": 16,
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "nationality": "Egypt",
    "position": "Forward"
  },
  {
    "id": 17,
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "nationality": "Netherlands",
    "position": "Defender"
  },
  {
    "id": 18,
    "name": "Rafael Leão",
    "club": "AC Milan",
    "nationality": "Portugal",
    "position": "Forward"
  },
  {
    "id": 19,
    "name": "Theo Hernández",
    "club": "AC Milan",
    "nationality": "France",
    "position": "Defender"
  },
  {
    "id": 20,
    "name": "Victor Osimhen",
    "club": "Napoli",
    "nationality": "Nigeria",
    "position": "Forward"
  }
];



export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}
export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);

}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);

    if (index === -1) {
        return null;
    }

    const deletedPlayer = database[index];
    database.splice(index, 1);

    return deletedPlayer;
};

export const findAndModifyPlayer = async (id: number, stats: UpdatePlayerModel) => {
  const playerIndex = database.findIndex(player => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex] = {
      ...database[playerIndex],
      ...stats
    };
  }

  return database[playerIndex];
};