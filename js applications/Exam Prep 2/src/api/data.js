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
export async function getAllBooks(){
    return api.get('/data/books?sortBy=_createdOn%20desc');
}
export async function getMyBooks(userId){
    return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}

export async function createBook(book){
    return api.post('/data/books', book);
}
export async function editBook(id, book){
    return api.put('/data/books/' + id, book);
}
export async function getBookById(id){
    return api.get('/data/books/' + id);
}

export async function deleteById(id){
    return api.del('/data/books/' + id);
}

//likes
export async function likeBook(bookId){
    return api.post('/data/likes',{
        bookId
    })
}

export async function getLikesByBookId(bookId){
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
}

export async function getMyLikeByBookId(bookId, userId){
    return api.get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

//search
export async function searchBooks(query){
    return api.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`));
}