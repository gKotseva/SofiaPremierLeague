import * as request from '../lib/request';

// GET Requests

export const getPlayers = async () => {
    const result = await request.get('/api/admin/players')
    return result;
}

export const getMatches = async () => {
    const result = await request.get('/api/admin/matches')
    return result;
}

export const getTeams = async () => {
    const result = await request.get('/api/admin/teams')
    return result;
}

export const getManagers = async () => {
    const result = await request.get('/api/admin/managers')
    return result;
}

export const getStaff = async () => {
    const result = await request.get('/api/admin/staff')
    return result;
}

// Post requests

export const postStaff = async (formData) => {
    const result = await request.post('/api/admin/staff', formData)

    return result;
};

export const postManagers = async (formData) => {
    const result = await request.post('/api/admin/managers', formData)

    return result;
};

export const postTeams = async (formData) => {
    const result = await request.post('/api/admin/teams', formData)

    return result;
};