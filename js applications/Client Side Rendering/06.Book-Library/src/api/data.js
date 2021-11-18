//  we are making this file as a buffer between
//  the api.js and the current task
//  for example -  get request to be specific
import * as api from './api.js';


export async function getAllBooks(){
    return api.get('/jsonstore/collections/books');
}

export async function getById(id){
    return api.get('/jsonstore/collections/books/' + id);
}

export async function createBook(idea){
    return api.post('/jsonstore/collections/books', idea);
}

export async function updateBook(id, idea){
    return api.put('/jsonstore/collections/books/' + id, idea);
}

export async function deleteById(id){
    return api.del('/jsonstore/collections/books/' + id);
}