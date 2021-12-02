//  we are making this file as a buffer between
//  the api.js and the current task
//  for example -  get request to be specific
import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const endpoints = {
    all: '/data/catalog'
    ,byId : '/data/catalog/'
    ,myItems : (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`
    ,create: '/data/catalog'
    ,edit: '/data/catalog/'
    ,delete: '/data/catalog/'
}

//these are for the specific task. change them with the correct data paths
export async function getAllMemes(){
    return api.get('/data/memes?sortBy=_createdOn%20desc');
}
export async function getMyMemes(userId){
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createMeme(meme){
    return api.post('/data/memes', meme);
}
export async function editMeme(id, meme){
    return api.put('/data/memes/' + id, meme);
}
export async function getMemeById(id){
    return api.get('/data/memes/' + id);
}

export async function deleteById(id){
    return api.del('/data/memes/' + id);
}