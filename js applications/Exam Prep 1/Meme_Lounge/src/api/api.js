import { notify } from '../notify.js';
import { setUserData, getUserData, clearUserData } from '../util.js'
export const settings = {
    host: 'http://localhost:3030',
};

async function request(url, options) {
    try {
        const response = await fetch(settings.host + url, options);

        if (response.ok == false) {
            if(response.status == 403){
                clearUserData();
            }
            const error = await response.json();
            throw new Error(error.message);
        }

        //this is for the old server
        try{
            return await response.json()
        }catch(err){
            return response;
        }

        //this is for the new server, current task is old, exam will be new
        // if(response.status == 204){
        //     return response;
        // }else{
        //     return response.json()
        // }

    } catch (err) {
        notify(err.message)
        //alert(err.message);
        throw err;
    }
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {},
    };

    const userData = getUserData();

    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password });
 
    //add more fields if we need them f.e username,gender,city....
    const userData = {
        username: result.username,
        email : result.email,
        id: result._id,
        gender: result.gender,
        token: result.accessToken
    }

    setUserData(userData);

    //if we want to do smth with the data
    return result
}

export async function register(username, email, password , gender) {
    const result = await post('/users/register', {username, email, password, gender });

    const userData = {
        username: result.username,
        email : result.email,
        id: result._id,
        gender: result.gender,
        token: result.accessToken
    }
    
    setUserData(userData);
    
    //if we want to do smth with the data
    return result
}

export async function logout() {
    await get('/users/logout');

    clearUserData();
}