const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./authRoutes");
const todoRouter = require("./todoRoutes");

router.use("/auth", authRouter);
router.use("/todo", todoRouter);

module.exports = router;
