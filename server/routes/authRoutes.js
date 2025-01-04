const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.route("/signin").post(authController.signin);
authRouter.route("/signup").post(authController.signup);
authRouter.route("/getlist").post(authController.getlist);

module.exports = authRouter;
