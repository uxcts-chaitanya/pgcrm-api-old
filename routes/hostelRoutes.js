const express = require("express");
const hostelController = require("../controllers/hostelController");
const hostelRouter = express.Router();

hostelRouter.route("/add").post(hostelController.addHostel);
hostelRouter.route("/student/income").post(hostelController.addStudentIncome);

module.exports = hostelRouter;
