const mongoose = require("mongoose");
const mongoURI =
"mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

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


