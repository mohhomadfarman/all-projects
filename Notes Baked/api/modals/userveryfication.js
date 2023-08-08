const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:false
    },
    otp: {
        type: String,
        required:true
    },

})
PostSchema.set('timestamps', true);

const userOtp = mongoose.model('userOtp', PostSchema)

module.exports = userOtp