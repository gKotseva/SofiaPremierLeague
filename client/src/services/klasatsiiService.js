import * as request from '../lib/request';

export const getAll = async () => {
    const result = await request.get('/api/klasatsii');
    console.log(result);
    return result;
};