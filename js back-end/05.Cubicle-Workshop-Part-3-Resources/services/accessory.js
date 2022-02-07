// here we will handle all requests and will attach them to a customly created middleware called storage
// from that middleware we will access all the functions in the controllers

const Accessory = require('../models/Accessory');
const { accessoryViewModel } = require('./util');



async function createAccessory(accessory){
    await Accessory.create(accessory);
}

async function getAll(){
    const data = await Accessory.find({});
    return data.map(accessoryViewModel);
}

module.exports = () => (req, res, next) => {
    req.accessory = {
        createAccessory
        , getAll
    };
    next(); // calling next in order to the server to proceed with the next middleware 
}