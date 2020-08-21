const db = require("../db");
const sequelize = db.sequelize;
const DataTypes = db.Sequelize;

module.exports.College = sequelize.define(
	"colleges",
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING
		}
	},
	{
		underscored: true,
	}
);
