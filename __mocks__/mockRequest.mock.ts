import { Request } from 'express';
import { Params } from 'express-serve-static-core';

export const makeMockRequest = ({
    params,
    query,
    body
}: {
    params?: Params;
    query?: Params;
    body?: any; // Adicionamos o campo 'body' aqui
}): Request => {
    const request = {
        params: params || {},
        query: query || {},
        body: body || {} // Incluímos o campo 'body'
    } as unknown;

    return request as Request;
};