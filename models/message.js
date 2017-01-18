module.exports = function(sequelize, DataTypes) {
	var Message = sequelize.define('Message',
	{
		author_id:{type:DataTypes.TEXT},
		text:{type:DataTypes.TEXT}
	},
	{
		associate: function(models) {
			Message.belongsTo(models.User, { foreignKey: 'userId' });
		}
	});
	return Message;
}