
const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const NotesModal = require("../modals/JobPostingSchema");

dotenv.config();
const JobPostApiController = expressAsyncHandler(async (req, res) => {
    const { notes, userId} = req.body;

    const data = new NotesModal({
      noteText:req.body.notes,
      userId:req.body.userId,
      });

      try {
        const dataToSave = await data.save();
        // console.log(data, "data", ;truereq.body);
        res.status(200).send({success:true});
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
})

module.exports = { JobPostApiController };  
