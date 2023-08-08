const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    noteText: {
        type: String,
        required:false
    },
    userId: {
        type: String,
        required:true
    },
   

    

})
PostSchema.set('timestamps', true);

const NotesModal = mongoose.model('NotesModal', PostSchema)

module.exports = NotesModal