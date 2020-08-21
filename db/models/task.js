const db = require("../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.Task = sequelize.define(
	"tasks",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING
		},
		dateTime: {
			type: DataTypes.DATE
		},
		type: {
			type: DataTypes.STRING
		},
		recurrant: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		status: {
			type: DataTypes.STRING
		},
		isImportant: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}		
	},
	{
		underscored: true,
	}
);
