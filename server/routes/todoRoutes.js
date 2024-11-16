const express = require("express");
const todoController = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.route("/getlist").get(todoController.getTodoList);
todoRouter.route("/add").post(todoController.addTodo);
todoRouter.route("/read/:id").get(todoController.readTodo);
todoRouter.route("/update:id").put(todoController.updateTodo);
todoRouter.route("/delete/:id").delete(todoController.deleteTodo);

module.exports = todoRouter;
