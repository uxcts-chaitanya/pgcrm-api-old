const express = require("express");
const hostelController = require("../controllers/hostelController");
const hostelRouter = express.Router();

hostelRouter.route("/add").post(hostelController.addHostel);
hostelRouter.route("/add/floor").post(hostelController.addHostelFloor);
hostelRouter.route("/add/room").post(hostelController.addHostelRoom);
hostelRouter.route("/add/bed").post(hostelController.addHostelBed);

module.exports = hostelRouter;
