const express = require("express");

const jwt = require('jsonwebtoken')
const secretkey="secretkey" 
const router = express.Router();
const nodemailer = require("nodemailer");

const Middelware = (req, res, next) => {
  // console.log("object")

  next();
};

const bodyParser = require("body-parser");
const NotesModal = require("../modals/JobPostingSchema");
const UserSignup = require("../modals/userSchema");
const userOtp = require("../modals/userveryfication");
// Apply body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post("/api/notes-list", async (req, res) => {
  const { userId } = req.body;
  const NotesFind = await NotesModal.find({ userId: req.body.userId });
  try {
    if(NotesFind[0]){
      res.status(200).send(NotesFind)
    }else{
      res.send([{error: "Post Your First Job!"}]);
    }
  }catch{
    res.status(400).send({ message: error.message });
    }
});



router.post("api/login", async (req, res) => {
  const { email, password } = req.body;
  const UserEmail = await UserSignup.find({ email: email });

  if (!UserEmail) {
    res.send({ loginStatus: false, err: "User Does not Exist" });
  } else if (UserEmail) {
    const LoginVeryfy =
      UserEmail[0]?.email === email && UserEmail[0]?.password === password;
    if (LoginVeryfy) {
      const token = jwt.sign(
        {
          email: UserEmail[0]?.email,
          username: UserEmail[0]?.username,
        },
        secretkey,
        {
          expiresIn: "8h",
        }
      );

      res.json({ loginStatus: LoginVeryfy, tokenuigiugitygtyigtyi: token });
      console.log(token, "okkkkkk");
    } else if (!LoginVeryfy) {
      res.send({ loginStatus: false, err: "Password Dose not match" });
    }
  }

});



let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});


router.post("/api/passwordforget", async (req, res) => {
  const { email, verificationCode } = req.body;
 
    try {
      otp = Math.floor(Math.random() * 9000 + 1000);
      console.log(otp, "adfghjhghjhghj");
        const UserEmail = await UserSignup.find({ email: email });
      console.log(UserEmail[0]._id, "adfghjhghjhghj");
        let EmailTemplate = `<div> <h3> Your Verification Code Is ${otp}<h3/> </div>`;
        var mailOptions = {
          from: process.env.SMTP_MAIL,
          to: UserEmail[0].email,
          subject: "Forget Password - OTP Verification",
          text: `${otp}`,
          html: EmailTemplate,
        };
        const data = new userOtp({
          userId:UserEmail[0]._id,
          otp:otp,
          });
          const dataToSave = await data.save();
      // const dataToSave = await data.save(); // This line seems to be using an undefined variable "data"
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent successfully!");
        }
      });
      res.status(200).send({ success: true });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  
});


module.exports = router;
