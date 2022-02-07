//mongoose model, works kinda like class
//initialised in models/index.js

const { Schema, model, Types: {ObjectId}} = require('mongoose');

//make the scheme
const carSchema = new Schema({
    name: { type: String, required: true}, 
    description: { type: String, default: ''}, 
    imageUrl: { type: String, default: ''}, 
    price: { type: Number, required: true, min: 0},
    accessories : {type : [ObjectId], default: [], ref: 'Accessory'}, //this is the field for the relationship between the Models
    owner : {type : ObjectId, ref: 'User'}    
});

//turn the schema into a model, this way we create a collection into the DB
const Car = model('Car', carSchema);


module.exports = Car;
//goes to services/cars.js for the requests