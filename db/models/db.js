const Sequelize = require("sequelize");

const db = {};

// The cache configuration
var Redis = require("ioredis");
db.cache = Redis;

db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.sequelize = require("../db");
db.models = require("./models");

//relations
//User Colleges
db.models.users.belongsTo(db.models.colleges, { foreignKey: 'collegeId', onDelete: 'CASCADE', onUpdate: 'CASCADE' })

//Users Tasks
db.models.users.hasMany(db.models.tasks, { as: 'tasks' })
db.models.tasks.belongsTo(db.models.users, { foreignKey: 'userId', as: 'user' })

module.exports = db;
