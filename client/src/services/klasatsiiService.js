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
    console.log(result)
    return result;
};

export const getAward5Years = async () => {
    const result = await request.get('/api/hall-of-fame/5years')
    return result;
}

export const getAward200Goals = async () => {
    const result = await request.get('/api/hall-of-fame/200goals')
    return result;
}

export const getChampions = async () => {
    const result = await request.get('/api/hall-of-fame/champions')
    return result;
}