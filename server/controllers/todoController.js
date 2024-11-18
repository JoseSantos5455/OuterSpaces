const Todo = require("../models/todoModel");

module.exports.getTodoList = async (req, res, next) => {
  try {
    let todos;
    let { id, flag } = req.body;
    if (id === 1) {
      if (flag) {
        todos = await Todo.find({}).sort({ priority: 1 });
      } else {
        todos = await Todo.find({}).sort({ priority: -1 });
      }
    } else if (id === 2) {
      if (flag) {
        todos = await Todo.find({}).sort({ timeline: 1 });
      } else {
        todos = await Todo.find({}).sort({ timeline: -1 });
      }
    } else if (id === 3) {
      if (flag) {
        todos = await Todo.find({}).sort({ progress: 1 });
      } else {
        todos = await Todo.find({}).sort({ progress: -1 });
      }
    } else {
      todos = await Todo.find({});
    }
    res.send(todos);
  } catch (e) {
    next(e);
  }
};

module.exports.getTodoListByCategory = async (req, res, next) => {
  try {
    let completed_items = await Todo.find({
      progress: 100,
    });
    let failed_items = await Todo.aggregate([
      {
        $match: {
          progress: {
            $lt: 100,
          },
        },
      },
    ]);
    res.send({ completed_items: completed_items, failed_items: failed_items });
  } catch (e) {
    next(e);
  }
};

module.exports.addTodo = async (req, res, next) => {
  try {
    req.body.priority = Number(req.body.priority);
    req.body.progress = Number(req.body.progress);
    let todo = new Todo(req.body);
    await todo.save();
    res.send("success");
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
