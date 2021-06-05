const api = require("express").Router();
var sampleRouter = require('./routes/sample');

api.use('/', sampleRouter);

module.exports=api;