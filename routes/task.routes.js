var express = require('express');
var router = express.Router();
var tasks = require('../controllers/task.controller');

router.get('/get/all', tasks.getAllTasks)
router.get('/get', tasks.getTask)
router.get('/filterUser', tasks.filterUser)
router.post('/add', tasks.createTask)
router.delete('/delete', tasks.deleteTask)
router.patch('/update', tasks.updateTask)

module.exports = router