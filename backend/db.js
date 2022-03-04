const mongoose = require("mongoose");
const mongoURI =
"mongodb+srv://Sushanthspoojary:<password>@cloud-note.4azha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var db;
var waiting = []
var error;

connectToMongo = () => {
  mongoose.connect(mongoURI, (error, db) => {
    if (error)
    {
      console.log(error)
    }
    else
    {
      db
      console.log("Connected to mongo successfully");
      }
    
  });
};

module.exports = connectToMongo;


