const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    post_title: { type: String, required: true, },
    post_dec: { type: String, required: true },
    post_cat: { type: String, required: true },
    post_tag: { type: String, required: true },
},
    { collection: "create-post" }
)


const model = mongoose.model('Postdata', Post)
module.exports = model

