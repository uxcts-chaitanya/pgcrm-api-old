const express = require("express");
const hostelController = require("../controllers/hostelController");
const hostelRouter = express.Router();

hostelRouter.route("/add").post(hostelController.addHostel);

module.exports = hostelRouter;
