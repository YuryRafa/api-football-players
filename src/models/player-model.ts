export interface PlayerModel{
    id: number;
    name: string;
    club: string;
    nationality: string;
    position: string;
}


export type UpdatePlayerModel = Partial<PlayerModel>;
