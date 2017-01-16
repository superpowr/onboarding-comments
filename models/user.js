 // see: http://docs.sequelizejs.com/en/v3/docs/models-definition/#definition -WD
module.exports = function(sequelize, DataTypes){
    var UserData = sequelize.define('UserData',
    {
      email_address:{type:DataTypes.TEXT},
    },
    {
        associate: function(models){
          // models.UserData.hasMany(models.something);
        }
    });
    return UserData;
}
