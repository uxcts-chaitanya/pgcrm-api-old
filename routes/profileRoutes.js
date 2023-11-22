const express = require("express");
const profileController = require("../controllers/profileController");
const profileRouter = express.Router();

profileRouter.route("/cp").post(profileController.changePassword);

module.exports = profileRouter;
