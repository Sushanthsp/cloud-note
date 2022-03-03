const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors')

connectToMongo();

const app = express();

const port = 5000;

app.use(cors())
app.use(express.json())
app.use('/', require("./routes/home"));
app.use('/api/auth', require("./routes/auth.js"))
app.use('/api/notes', require("./routes/notes.js"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
