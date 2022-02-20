const {Schema, model, Types: { ObjectId }} = require('mongoose');

const URL_PATTERN = /^http{1}s?:\/\/(.+)/;


const courseSchema = new Schema({
    title : { type: String, minlength: [4, 'Title must be at least 4 characters long']}
    , description  : { type: String, minlength: [20, 'Description must be min 20 symbols'] }
    , imageUrl  :
        { type: String, validate: {
            validator(value){
                return URL_PATTERN.test(value);
            }, message: 'Image must be a valid URL'
        }
    }
    , isPublic  : { type: Boolean, default: false }
    , createdAt  : { type: String, required: true }
    , creator  : { type: ObjectId, ref: 'User', required: true }
    , usersEnrolled   : { type: [ObjectId], ref: 'User', default: [] }
});

const Course = model('Course', courseSchema);

module.exports = Course;