const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const Todo = require("../models/todoModel");

const getDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return (
    year +
    "." +
    (month < 10 ? "0" + month : month) +
    "." +
    (day < 10 ? "0" + day : day)
  );
};

module.exports.getTodoList = async (req, res, next) => {
  try {
    let todos,
      pipeline = [];
    let { sortKey, keyword } = req.body;
    if (keyword) {
      pipeline = pipeline.concat([
        {
          $addFields: {
            time: {
              $dateToString: {
                date: "$timeline",
                timezone: "+08:00",
                format: "%Y.%m.%d",
              },
            },
          },
        },
        {
          $match: {
            $or: [
              {
                description: {
                  $regex: keyword,
                },
              },
              {
                time: {
                  $regex: keyword,
                },
              },
            ],
          },
        },
      ]);
    }
    if (sortKey) {
      let { id, flag } = sortKey;
      if (id === 1) {
        if (flag) {
          pipeline.push({ $sort: { priority: 1 } });
        } else {
          pipeline.push({ $sort: { priority: -1 } });
        }
      } else if (id === 2) {
        if (flag) {
          pipeline.push({ $sort: { timeline: 1 } });
        } else {
          pipeline.push({ $sort: { timeline: -1 } });
        }
      } else if (id === 3) {
        if (flag) {
          pipeline.push({ $sort: { progress: 1 } });
        } else {
          pipeline.push({ $sort: { progress: -1 } });
        }
      }
    }
    pipeline = pipeline.concat([
      {
        $addFields: {
          time: {
            $dateToString: {
              date: "$timeline",
              timezone: "+08:00",
              format: "%Y.%m.%d",
            },
          },
        },
      },
      {
        $project: {
          timeline: 0,
          created_at: 0,
        },
      },
    ]);
    todos = await Todo.aggregate(pipeline);
    res.send(todos);
  } catch (e) {
    next(e);
  }
};

module.exports.getTodoListByCategory = async (req, res, next) => {
  try {
    let completed_pipeline = [
      { $match: { progress: 100 } },
      {
        $project: {
          _id: 1,
          description: 1,
          timeline: 1,
        },
      },
    ];
    let today_pipeline = [
      {
        $addFields: {
          time: {
            $dateToString: {
              date: "$timeline",
              timezone: "+08:00",
              format: "%Y.%m.%d",
            },
          },
        },
      },
      {
        $match: {
          time: getDate(),
        },
      },
      {
        $project: {
          _id: 1,
          progress: 1,
          description: 1,
        },
      },
    ];
    let failed_pipeline = [
      {
        $match: {
          progress: {
            $lt: 100,
          },
          timeline: {
            $lt: new Date(),
          },
        },
      },
      {
        $project: {
          _id: 1,
          description: 1,
          progress: 1,
        },
      },
    ];
    let completed_items = await Todo.aggregate(completed_pipeline);
    let today_items = await Todo.aggregate(today_pipeline);
    let failed_items = await Todo.aggregate(failed_pipeline);
    res.send({
      completed_items: completed_items,
      today_items: today_items,
      failed_items: failed_items,
    });
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
    let pipeline = [
      {
        $match: {
          _id: new ObjectId(req.params.id),
        },
      },
      // {
      //   $addFields: {
      //     timeline: {
      //       $dateToString: {
      //         date: "$timeline",
      //         timezone: "+08:00",
      //         format: "%Y.%m.%d",
      //       },
      //     },
      //   },
      // },
    ];
    let todos = await Todo.aggregate(pipeline);
    res.send(todos[0]);
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
