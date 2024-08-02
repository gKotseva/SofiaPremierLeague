import * as request from '../lib/request';

export const getPenalties = async () => {
    const result = await request.get('/api/nakazaniq');
    return result;
}

export const getPlayersRightsRevoked = async () => {
    const result = await request.get('/api/prava')
    return result;
}