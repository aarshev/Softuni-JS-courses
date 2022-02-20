const {Schema, model, Types: { ObjectId }} = require('mongoose');



const NAME_PATTERN = /^[a-zA-Z0-9-]+$/



const userSchema = new Schema({
    username: {
        type: String, minlength: [5, 'First name must be at least 5 characters long'], validate:{
            validator(value){
                return NAME_PATTERN.test(value);
            },
            message: 'First name may contain only english letters and numbers'
        }
    }, 
    hashedPassword : { type: String, required: true},
    enrolledCourses : { type: [ObjectId], ref: 'Course', default: []}
});
// for unique username
userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;

