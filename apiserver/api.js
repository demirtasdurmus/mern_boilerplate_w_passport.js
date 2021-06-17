const api = require("express").Router();
var sampleRouter = require('./routes/sample');
var userRouter = require('./routes/users');

api.use('/', sampleRouter);
api.use('/users', userRouter);

module.exports = api;