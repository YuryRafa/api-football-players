import { HttpResponse } from "../models/http-reponse-model";

export const okStatus = (data: any): HttpResponse => {
    return {
        statusCode: 200,
        body: data
    };
};

export const CreatedStatus = (): HttpResponse => {
    return {
        statusCode: 201,
        body: null
    };
};

export const noContentStatus = (): HttpResponse => {
    return {
        statusCode: 204,
        body: null
    };
};

export const badRequestStatus = (): HttpResponse => {
    return {
        statusCode: 400,
        body: null
    };
};

export const notFoundStatus = (): HttpResponse => {
    return {
        statusCode: 404,
        body: null
    };
};

export const internalServerErrorStatus = (): HttpResponse => {
    return {
        statusCode: 500,
        body: null
    };
};
