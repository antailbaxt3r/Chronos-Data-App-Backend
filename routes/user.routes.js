var express = require('express');
var router = express.Router();
var users = require('../controllers/user.controller');

router.get('/get/all', users.getAllUsers)
router.get('/get', users.getUser)
router.get('/filterCollege', users.filterCollege)
router.post('/add', users.createUser)
router.delete('/delete', users.deleteUser)
router.patch('/update', users.updateUser)

module.exports = router