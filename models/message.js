module.exports = function(sequelize, DataTypes){
  var Message = sequelize.define('Message',
    {
      body: DataTypes.TEXT,
      authorName: DataTypes.STRING
    },
    {
    classMethods: {
      associate: function(models) {
        models.Message.belongsTo(models.User),
        models.Message.hasMany(models.Message, { as: 'Comments' })
      }
    }   
  });
  return Message;
}
