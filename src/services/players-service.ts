import { PlayerModel, UpdatePlayerModel } from "../models/player-model";
import * as playerRepository from "../repositories/player-repository";
import * as httpResponse from "../utils/http-status-helper";

export const getPlayerService = async () => {
    try {
        const data = await playerRepository.findAllPlayers();
        if (!data || data.length === 0) {
            return httpResponse.noContentStatus();
        }
        return httpResponse.okStatus(data);
    } catch {
        return httpResponse.internalServerErrorStatus();
    }
};

export const getPlayerByIdService = async (id: number) => {
    try {
        if (isNaN(id)) {
            return httpResponse.badRequestStatus();
        }
        const data = await playerRepository.findPlayerById(id);
        if (!data) {
            return httpResponse.notFoundStatus();
        }
        return httpResponse.okStatus(data);
    } catch {
        return httpResponse.internalServerErrorStatus();
    }
};

export const createPlayerService = async (player: PlayerModel) => {
    try {
        if (!player || !player.name || !player.club) {
            return httpResponse.badRequestStatus();
        }
        await playerRepository.insertPlayer(player);
        return httpResponse.CreatedStatus();
    } catch {
        return httpResponse.internalServerErrorStatus();
    }
};

export const deletePlayerService = async (id: number) => {
    try {
        if (isNaN(id)) {
            return httpResponse.badRequestStatus();
        }
        const deleted = await playerRepository.deleteOnePlayer(id);
        if (!deleted) {
            return httpResponse.notFoundStatus();
        }
        return httpResponse.okStatus({ message: "Player deleted" });
    } catch {
        return httpResponse.internalServerErrorStatus();
    }
};

export const updatePlayerService = async (id: number, player: UpdatePlayerModel) => {
    try {
        if (isNaN(id) || !player) {
            return httpResponse.badRequestStatus();
        }
        const data = await playerRepository.findAndModifyPlayer(id, player);
        if (!data) {
            return httpResponse.notFoundStatus();
        }
        return httpResponse.okStatus(data);
    } catch {
        return httpResponse.internalServerErrorStatus();
    }
};
