module.exports = function(sequelize, DataTypes){
  var User = sequelize.define('User',
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
    classMethods: {
      associate: function(models) {
        models.User.hasMany(models.Message)
      }
    }
   });
  return User;
}
