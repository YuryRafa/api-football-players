import * as httpResponse from "../utils/http-status-helper";
import * as clubsRepository from '../repositories/club-repository';

export const getClubService = async () => {
    const data = await clubsRepository.findAllClubs();
    const response = httpResponse.okStatus(data);
    return response;
}
