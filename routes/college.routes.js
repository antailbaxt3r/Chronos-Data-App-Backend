var express = require('express');
var router = express.Router();
var colleges = require('../controllers/college.controller');

router.get('/get/all', colleges.getAllColleges)
router.get('/get', colleges.getCollege)
router.post('/add', colleges.createCollege)
router.delete('/delete', colleges.deleteCollege)
router.patch('/update', colleges.updateCollege)

module.exports = router