const {Schema, model, Types: { ObjectId }} = require('mongoose');

const URL_PATTERN = /^http{1}s?:\/\/(.+)/;

const tripSchema = new Schema({
    startPoint : { type: String, minlength: [4, 'Start Point must be at least 4 characters long']}
    , endPoint  : { type: String, minlength: [4, 'End Point must be at least 4 characters long'] }
    , date  : { type: String, required: true }
    , time  : { type: String,required: true }
    , carImage  :
        { type: String, validate: {
            validator(value){
                return URL_PATTERN.test(value);
            }, message: 'Image must be a valid URL'
        }
    }
    , carBrand  : { type: String, minlength: [4, 'Car Brnad must be at least 4 characters long'] }
    , seats  : { type: Number, min: [0, 'Seats must be greater than 0'], max: [4, 'Seats must be no more than 4'] }
    , price  : { type: Number,  min: [1, 'Price must be greater than 0'], max: [50, 'Price must be no more than 4'] }
    , description  : { type: String, minlength: [10, 'Description must be at least 8 characters long'] }
    , creator  : { type: ObjectId, ref: 'User', required: true }
    , buddies   : { type: [ObjectId], ref: 'User', default: [] }
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;