const express = require("express");
const todoController = require("../controllers/todoController");
const todoRouter = express.Router();

todoRouter.route("/getlist").post(todoController.getTodoList);
todoRouter
  .route("/getListByCategory")
  .get(todoController.getTodoListByCategory);
todoRouter.route("/add").post(todoController.addTodo);
todoRouter.route("/read/:id").get(todoController.readTodo);
todoRouter.route("/update/:id").put(todoController.updateTodo);
todoRouter.route("/delete/:id").delete(todoController.deleteTodo);

module.exports = todoRouter;
