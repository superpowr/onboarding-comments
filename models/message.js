module.exports = function(sequelize, DataTypes) {
	var Message = sequelize.define('Message',
	{
		author_name:{type:DataTypes.TEXT},
		text:{type:DataTypes.TEXT}, 
		room_name: {type:DataTypes.TEXT},
	},
	{
		associate: function(models) {
			Message.belongsTo(models.User, { foreignKey: 'author_name' });
			Message.belongsTo(models.Room, { foreignKey: 'room_name'});
		}
	});
	return Message;
};