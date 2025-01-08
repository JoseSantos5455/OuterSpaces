const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.send({ msg: "Incorrect email or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.send({ msg: "Incorrect email or Password", status: false });
    delete user.password;
    res.send({ msg: "success", user: user });
  } catch (error) {
    next(error);
  }
};

module.exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.send({ msg: "Incorrect email or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.send({ msg: "Incorrect email or Password", status: false });
    delete user.password;
    res.send({ msg: "success", user: user });
  } catch (error) {
    next(error);
  }
};

module.exports.signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.send({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      username,
      password: hashedPassword,
    });
    res.send("success");
  } catch (error) {
    next(error);
  }
};

module.exports.getlist = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const getItem = await User.findOne({ username });
    if (getItem) return res.send({ msg: "already username", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      email,
      username,
      password: hashedPassword,
    });
  } catch (error) {
    next(error);
  }
};
