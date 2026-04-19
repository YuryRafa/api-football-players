import { Request, Response } from "express"
import * as clubsService from "../services/clubs-service"

export const getClubs = async (req: Request, res: Response) => {
    const response = await clubsService.getClubService();
    res.status(response.statusCode).json(response.body);



}