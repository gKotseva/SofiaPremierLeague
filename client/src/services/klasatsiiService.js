import * as request from '../lib/request';

export const getCairo = async () => {
    const result = await request.get('/api/klasatsii/cairo-fareplay');
    return result;
};

export const getVR7 = async () => {
    const result = await request.get('/api/klasatsii/vr7-igrach-sedmitsa');
    return result;
};

export const getGripSocks = async () => {
    const result = await request.get('/api/klasatsii/gripsocks-igrach-sedmitsa');
    return result;
};

export const getKerelski = async () => {
    const result = await request.get('/api/klasatsii/kerelski-igrach-sedmitsa');
    return result;
};

export const getArabesk = async () => {
    const result = await request.get('/api/klasatsii/igrata-arabesk');
    return result;
};