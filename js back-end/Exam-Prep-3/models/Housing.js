const {Schema, model, Types: { ObjectId }} = require('mongoose');

const URL_PATTERN = /^http{1}s?:\/\/(.+)/;


//TODO MAKE A SPECIFIC STRING FOR TYPE
const housingSchema = new Schema({
    name : { type: String, minlength: [4, 'Name must be at least 4 characters long']}
    , type  : { type: String, required: true, enum:['Apartament', 'Villa', 'House']}
    , year  : { type: Number, min: [1850, 'Min year is 1850'], max: [2021, 'Max year is 2021'] }
    , city  : { type: String, minlength: [4, 'City must be at least 4 characters long'] }
    , homeImage  :
        { type: String, validate: {
            validator(value){
                return URL_PATTERN.test(value);
            }, message: 'Image must be a valid URL'
        }
    }
    , description  : { type: String, maxlength: [60, 'Description must be max 60 symbols'] }
    , pieces  : { type: Number, min: [0, 'Pieces must be greater than 0'], max: [10, 'Pieces must be no more than 10'] }
    , owner  : { type: ObjectId, ref: 'User', required: true }
    , rented   : { type: [ObjectId], ref: 'User', default: [] }
});

const Housing = model('Housing', housingSchema);

module.exports = Housing;