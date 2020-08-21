const db = {};

db.users = require('./user').User
db.tasks = require('./task').Task
db.colleges = require('./college').College

module.exports = db;