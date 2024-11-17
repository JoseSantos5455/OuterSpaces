const Todo = require("../models/todoModel");

module.exports.getTodoList = async (req, res, next) => {
  try {
    let todos = await Todo.find({});
    res.send(todos);
  } catch (e) {
    next(e);
  }
};

module.exports.addTodo = async (req, res, next) => {
  try {
    let todo = new Todo(req.body);
    let savedTodo = await todo.save();
    res.send(savedTodo);
  } catch (e) {
    next(e);
  }
};

module.exports.readTodo = async (req, res, next) => {
  try {
    let todo = await Todo.findById(req.params.id);
    res.send(todo);
  } catch (e) {
    next(e);
  }
};

module.exports.updateTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.send("success");
  } catch (e) {
    next(e);
  }
};

module.exports.deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);
    res.send("success");
  } catch (e) {
    next(e);
  }
};
