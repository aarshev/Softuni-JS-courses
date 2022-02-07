const bcrypt = require('bcrypt');

async function hashPassword(pass){
    return await bcrypt.hash(pass, 10);
}   
async function comparePassword(pass, hashedPassword){
    return await bcrypt.compare(pass, hashedPassword);
}   

function isLoggedIn(){
    return function (req, res, next){
        if(req.session.user){
            next();
        }else{
            res.redirect('/login');
        }
    }
}

// making the model to be returned in order to handlebars to work
function accessoryViewModel(accessory){
    return {
        id: accessory._id,
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
        price: accessory.price,
        owner: accessory.owner
    }
}

// making the model to be returned in order to handlebars to work
function carViewModel(car){
    const model = {
        id: car._id,
        name: car.name,
        description: car.description,
        imageUrl: car.imageUrl,
        price: car.price,
        accessories: car.accessories,
        owner: car.owner
    }

    if(model.accessories.length > 0 && model.accessories[0].name){
        model.accessories = model.accessories.map(accessoryViewModel);
    }


    return model
}


module.exports = {
    accessoryViewModel
    , carViewModel
    , hashPassword
    , comparePassword
    , isLoggedIn
}