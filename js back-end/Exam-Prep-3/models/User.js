const {Schema, model} = require('mongoose');

//ADD NAME VALIDATION
const USERNAME_PATTERN = /^[a-zA-Z-]+$/


const userSchema = new Schema({
    name: {
        type: String, minlength: [3, 'First name must be at least 3 characters long'], validate:{
            validator(value){
               return true
            },
            message: 'First name may contain only english letters'
        }
    }, 
    username: { type: String, minlength: [3, 'First name must be at least 3 characters long']}, 
    hashedPassword : { type: String, required: true}
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

