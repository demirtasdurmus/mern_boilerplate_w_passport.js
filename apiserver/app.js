var createError = require('http-errors');
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const mongoose = require ("mongoose");
var logger = require('morgan');
var cors = require("cors");

var app = express();

//connecting mongoose**********************************
mongoose.connect("mongodb://localhost:27017/mern_boilerplate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//Mongoose connection error handling********************
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to mongoDB database");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/build')));

app.use("/api", require("./api"))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/../client/build", "index.html"));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
