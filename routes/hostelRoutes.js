const express = require("express");
const hostelController = require("../controllers/hostelController");
const hostelRouter = express.Router();

hostelRouter.route("/add").post(hostelController.addHostel);
hostelRouter.route("/list").get(hostelController.getList);

hostelRouter.route("/income/add").post(hostelController.addStudentIncome);
hostelRouter.route("/income/list").get(hostelController.listStudentIncome);

hostelRouter.route("/adduser").post(hostelController.addUserToHostel);
hostelRouter.route("/users/list").get(hostelController.HostelUsers);

hostelRouter.route("/addstaff").post(hostelController.addStaffToHostel);
hostelRouter.route("/staff/list").get(hostelController.listStaffOfHostel);

module.exports = hostelRouter;
