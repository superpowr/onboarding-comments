module.exports = function(sequelize, DataTypes) {
	var Room = sequelize.define('Room', 
	{
		room_name: {type:DataTypes.TEXT, primaryKey: true, unique: true}
	},
	{
		associate: function(models) {
			Room.hasMany(models.Message)
		}
	});
	return Room;
}