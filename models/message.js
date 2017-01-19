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
}

// $2a$10$gSndHELz4pqXcErsadnHDuQUJNZcJhvtC0IqeUGAVbCa0b2LEZLKm
// $2a$10$eTKoWTh6w5kYaE9YWPY15.lHKOn6uArdc0Bj.IFRW3RjwBQ0uqmQe