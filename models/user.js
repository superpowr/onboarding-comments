 // see: http://docs.sequelizejs.com/en/v3/docs/models-definition/#definition -WD
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User',
    {
      email_address:{type:DataTypes.TEXT, primaryKey: true, unique: true},
      password:{type:DataTypes.TEXT},
      salt: {type:DataTypes.TEXT}
    },
    {
      associate: function(models){
        User.hasMany(models.Message);
      }
    });
    return User;
}