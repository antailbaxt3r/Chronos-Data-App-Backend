var express = require('express');
var router = express.Router();

var tasksRouter = require('./task.routes');
var usersRouter = require('./user.routes');
var collegesRouter = require('./college.routes')

router.use('/tasks', tasksRouter);
router.use('/users', usersRouter);
router.use('/colleges', collegesRouter);

module.exports = router