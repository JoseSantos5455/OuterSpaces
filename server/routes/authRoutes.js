const express = require("express");
const authController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.route("/signin").post(authController.signin);
authRouter.route("/signup").post(authController.signup);
authRouter.route("/getusers/:id").post(authController.getUsers);

module.exports = authRouter;
