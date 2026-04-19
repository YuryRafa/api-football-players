import * as httpResponse from "../utils/http-status-helper";
import * as clubsRepository from '../repositories/club-repository';

export const getClubService = async () => {
    try {
        const data = await clubsRepository.findAllClubs();

        if (data.length === 0) {
            return httpResponse.noContentStatus();
        }

        return httpResponse.okStatus(data);
    } catch (error) {
        return httpResponse.internalServerErrorStatus();
    }
}