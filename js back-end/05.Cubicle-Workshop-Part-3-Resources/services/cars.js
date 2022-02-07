// here we will handle all requests and will attach them to a customly created middleware called storage
// from that middleware we will access all the functions in the controllers

const Car = require('../models/Car');
const { carViewModel } = require('./util');




//this is the request for the home page
async function getAll(query){
    // lean -> return only the data a.k.a viewModel(that way we use only the data we want to use) --> in order to handlebars to work, the other way is to map them as we will do
    //const cars = await Car.find({}).lean();

    //adding filter options
    const options = {};

    if(query.search){
        options.name = new RegExp(query.search, 'i');
    }
    if(query.from){
        options.price = { $gte: Number(query.from)};
    }
    if(query.to){
        if(!options.price){
            options.price = {};
        }
        options.price.$lte = Number(query.to);
    }

    const cars = await Car.find(options);

    return cars.map(carViewModel);
}

//this is the request for the details - reading one record
async function getById(id){
    const car = await Car.findById(id).populate('accessories');
    if(car){
        return carViewModel(car);
    }else{
        return undefined; //if we dont have the specific car, return undefined
    }

}

//this is the request for create
async function createCar(car){
    const result = new Car(car);
    await result.save();
}



//this is the request for the delete 
async function deleteById(id, ownerId){
    const existing = await Car.findById(id);

    if(existing.owner != ownerId){
        return false;
    }
    await Car.findByIdAndDelete(id);

    return true;
}

//this is the request for the edit 
async function updateById(id, car, ownerId){
    const existing = await Car.findById(id);

    if(existing.owner != ownerId){
        return false;
    }

    existing.name = car.name;
    existing.description = car.description;
    existing.imageUrl = car.imageUrl || undefined;
    existing.price = car.price;
    existing.accessories = car.accessories;

    await existing.save();

    return true
}


async function attachAccessory(carId, accessoryId, ownerId){
    const existing = await Car.findById(carId);

    if(existing.owner != ownerId){
        return false;
    }

    existing.accessories.push(accessoryId);

    
    await existing.save();

    return true;
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll
        , getById
        , createCar
        , deleteById
        , updateById
        , attachAccessory
    };
    next(); // calling next in order to the server to proceed with the next middleware 
}