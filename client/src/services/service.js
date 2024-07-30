import * as request from '../lib/request';

export const getPenalties = async () => {
    const result = await request.get('/api/nakazaniq');
    console.log(result)
    return result;
}