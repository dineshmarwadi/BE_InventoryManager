const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const constants = require("./models/contants");
const router = require('./routes');
const directoryPath = __dirname;
const app = express();
app.use(cors(constants.corsOpts));
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use('/api',router);


mongoose.connect(constants.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Node app serving on port: ${PORT}`));
module.exports = {
  directoryPath : directoryPath
}