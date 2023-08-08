

const express = require("express");
const router = express.Router();

const { JobPostApiController } = require("../controllers/JobPostApiController");
router.post('/notes', JobPostApiController)

module.exports = router;

 
