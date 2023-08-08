const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:false
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
    

})
userSchema.set('timestamps', true);

const UserSignup = mongoose.model('usersignup', userSchema)

module.exports = UserSignup