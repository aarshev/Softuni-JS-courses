//CRUD 

const Housing = require('../models/Housing');


async function createOperaiton(post){
    const result = new Housing(post);
    await result.save();

    return result;
}


async function getOperation(){
    return Housing.find({});
}

async function getTopThree(){
    return Housing.find().sort({ _id: -1 }).limit(3);
}

//TODO change POST and population fields
async function getByIdOperation(id){
    return Housing.findById(id).populate('rented', 'name')
}

//TODO change POST and population fields
async function getByCreatorOperation(userId){
    return Housing.find({owner: userId})
}

async function updateOperation(id, housing){
    const existing = await Housing.findById(id);

    existing.name = housing.name;
    existing.type = housing.type;
    existing.year = housing.year;
    existing.city = housing.city;
    existing.homeImage = housing.homeImage;
    existing.description = housing.description;
    existing.pieces = housing.pieces;

    await existing.save();
}


async function deleteByIdOperation(id){
    return Housing.findByIdAndDelete(id);
}

//TODO Add logic for the array in the details
async function rent(housingId, userId){
    const housing = await Housing.findById(housingId);

    if(housing.rented.includes(userId)){
        throw new Error('User has already joined');
    }

    housing.rented.push(userId);


    await housing.save();
}

async function searchType(searchStr){
    if(searchStr){
        return Housing.find({type: {$regex: searchStr, $options: 'i'}}).lean();
    }else{
        return Housing.find({type: {$regex: 'ultragigamegafaketext', $options: 'i'}}).lean();
    }
}


module.exports = {
    createOperaiton,
    getOperation,
    getByIdOperation,
    updateOperation,
    deleteByIdOperation,
    getByCreatorOperation,
    rent,
    getTopThree,
    searchType
}