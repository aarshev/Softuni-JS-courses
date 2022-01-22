// here we will handle all requests and will attach them to a customly created middleware called storage
// from that middleware we will access all the functions in the controllers

const fs = require('fs/promises') // for the file system

const filePath = './services/data.json'

// the read and write functions will handle actions in the file
async function read(){
    try{
        const file = await fs.readFile(filePath);
        return JSON.parse(file);
    } catch(err){ // if the request fails
        console.error('Database read error');
        console.log(err);
        process.exit(1); //kill the app
    }
}

async function write(data){
    try{
        await fs.writeFile(filePath, JSON.stringify(data, null, 2)); //last 2 params in the stringify is indentation
    } catch (err){
        console.error('Database write error');
        console.log(err);
        process.exit(1); //kill the app
    }
}

//this is the request for the home page
async function getAll(query){
    const data = await read();
    
    //transforming the object comming in data into array for easier operations and adding the id in it
    let cars =  Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id } , v));

    //this is for the search option, filter by the params specified in the form in the index.hbs
    if(query.search){
        cars = cars.filter(c => c.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
    }
    if(query.from){
        cars = cars.filter(c => c.price >= Number(query.from));
    }
    if(query.to){
        cars = cars.filter(c => c.price <= Number(query.to));
    }

    return cars
}

//this is the request for the details - reading one record
async function getById(id){
    const data = await read();
    const car = data[id];

    if(car){
        return Object.assign({}, {id}, car);
    }else{
        return undefined; //if we dont have the specific car, return undefined
    }
}

//this is the request for create
async function createCar(car){
    const cars = await read();
    let id;

    do{
        id = nextId();
    } while (cars.hasOwnProperty(id));

    cars[id] = car;

    await write(cars);
}
//generating random id's
function nextId(){
    return 'xxxxxxxx-xxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16))
}


//this is the request for the delete 
async function deleteById(id){
    const data = await read();

    if(data.hasOwnProperty(id)){
        delete data[id];
        await write(data);
    }else{
        throw new Error('No such id ')
    }
}

//this is the request for the edit 
async function updateById(id, car){
    const data = await read();

    if(data.hasOwnProperty(id)){
        data[id] = car;
        await write(data);
    }else{
        throw new Error('No such id ')
    }
}


module.exports = () => (req, res, next) => {
    req.storage = {
        getAll
        , getById
        , createCar
        , deleteById
        , updateById
    };
    next(); // calling next in order to the server to proceed with the next middleware 
}