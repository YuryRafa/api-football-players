import { Request, Response } from "express"
import * as playerService from "../services/players-service";
import { noContentStatus } from "../utils/http-status-helper";
import { PlayerModel, UpdatePlayerModel } from "../models/player-model";



export const getPlayer = async (req: Request, res: Response) => {
    const httpResponse = await playerService.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const getPlayerById = async (req:Request, res:Response) => {
    const paramId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const id = parseInt(paramId, 10);
    const httpResponse = await playerService.getPlayerByIdService(id);
    res.status(httpResponse.statusCode).json(httpResponse.body);

};

export const postPlayer = async(req:Request, res:Response) => {
    const bodyValue = req.body;
    const httpResponse = await playerService.createPlayerService(bodyValue);
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
        const response = await noContentStatus();
        res.status(response.statusCode).json(response.body)
    }

};

export const deletePlayer = async(req: Request, res: Response) => {
    const param = req.params.id;

    if (Array.isArray(param)) {
    return res.status(400).json({ error: "Invalid ID format" });
    }

    const id = parseInt(param);
    const httpResponse = await playerService.deletePlayerService(id);   
    
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }

}

export const updatePlayer = async (req:Request, res:Response) => {
    const param = req.params.id;
    const bodyValue: UpdatePlayerModel = req.body;

    if (Array.isArray(param)) {
    return res.status(400).json({ error: "Invalid ID format" });
    }

    const id = parseInt(param);
    const httpResponse = await playerService.updatePlayerService(id, bodyValue);   
    
    if (httpResponse) {
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}
