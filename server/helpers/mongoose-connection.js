var mongoose = require("mongoose");
const mongoAtlasUri = `mongodb://127.0.0.1:27017/todo`;

function mongooseConnection() {
  try {
    // Connect to the MongoDB cluster
    mongoose
      .connect(mongoAtlasUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("db connected"))
      .catch((err) => console.log(err));
  } catch (e) {
    console.log("could not connect");
  }
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
}

module.exports = mongooseConnection;
