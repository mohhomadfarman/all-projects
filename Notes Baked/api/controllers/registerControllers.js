const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const User = require("../modals/userSchema");
const UserSignup = require("../modals/userSchema");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});



const UserRegister = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const data = new UserSignup({
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const useremail = await UserSignup.findOne({ email: email });

    if (useremail) {
      res
        .status(200)
        .send({ success: false, msg: "this email is already exists" });
    } else {
      const dataToSave = await data.save();
      res.status(200).send({ success: true });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }

});

module.exports = { UserRegister };
