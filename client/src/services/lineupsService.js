import * as request from '../lib/request';


export const getLineups = async () => {
    const result = await request.get('/api/lineups');
    return result;
};

export const getStats = async () => {
    const result = await request.get('/api/stats')
    return result;
}