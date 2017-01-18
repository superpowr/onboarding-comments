 // see: http://docs.sequelizejs.com/en/v3/docs/models-definition/#definition -WD
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User',
    {
      email_address:{type:DataTypes.TEXT, primaryKey: true, unique: true},
    },
    {
        associate: function(models){
          User.hasMany(models.message);
        }
    });
    return User;
}
