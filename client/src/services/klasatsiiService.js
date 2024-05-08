import * as request from '../lib/request';

export const getCairo = async () => {
    const result = await request.get('/api/klasatsii/cairo-fareplay');
    return result;
};