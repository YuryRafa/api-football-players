"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/repositories/player-repository.ts
var player_repository_exports = {};
__export(player_repository_exports, {
  findAllPlayers: () => findAllPlayers,
  findPlayerById: () => findPlayerById
});
module.exports = __toCommonJS(player_repository_exports);
var database = [
  {
    "id": 1,
    "name": "Kylian Mbapp\xE9",
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
    "name": "Vin\xEDcius Jr",
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
    "name": "Martin \xD8degaard",
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
    "name": "Rafael Le\xE3o",
    "club": "AC Milan",
    "nationality": "Portugal",
    "position": "Forward"
  },
  {
    "id": 19,
    "name": "Theo Hern\xE1ndez",
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
var findAllPlayers = () => __async(null, null, function* () {
  return database;
});
var findPlayerById = (id) => __async(null, null, function* () {
  return database.find((player) => player.id === id);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findAllPlayers,
  findPlayerById
});
