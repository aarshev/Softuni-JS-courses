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

        if(response.status == 204){
            return response;
        }else{
            return response.json()
        }

    } catch (err) {
        alert(err.message);
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

export async function login(username, password) {
    const result = await post('/users/login', { username, password });
 
    //add more fields if we need them f.e username,gender,city....
    const userData = {
        username: result.username,
        id: result._id,
        token: result.accessToken
    }

    setUserData(userData);

    //if we want to do smth with the data
    return result
}

export async function register(username, password ) {
    const result = await post('/users/register', {username, password });

    const userData = {
        username: result.username,
        id: result._id,
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