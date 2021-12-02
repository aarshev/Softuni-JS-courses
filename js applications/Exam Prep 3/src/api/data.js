//  we are making this file as a buffer between
//  the api.js and the current task
//  for example -  get request to be specific
import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


// const endpoints = {
//     all: '/data/catalog'
//     ,byId : '/data/catalog/'
//     ,myItems : (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`
//     ,create: '/data/catalog'
//     ,edit: '/data/catalog/'
//     ,delete: '/data/catalog/'
// }

//these are for the specific task. change them with the correct data paths
export async function getAllGames(){
    return api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function createGames(game){
    return api.post('/data/games', game);
}

export async function editGames(id, game){
    return api.put('/data/games/' + id, game);
}

export async function deleteById(id){
    return api.del('/data/games/' + id);
}

export async function getGamesById(id){
    return api.get('/data/games/' + id);
}

export async function getMostRecentGames(){
    return api.get(`/data/games?sortBy=_createdOn%20desc&distinct=category`);
}
