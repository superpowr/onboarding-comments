module.exports = function(sequelize, DataTypes){
  
  var User = sequelize.define('User', 

    // A user has one attribute: email_address. We have an honor system. ;)
    { email_address: { type: DataTypes.TEXT }, },

    // Why does associate never run in index.js? It should have been within classMethods!
    // see: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelsuserjs
    // (This is a mistake in the boilerplate that could be fixed for future applicants. Sorry Will!)

    // A user has many comments.
    { classMethods: { associate: function(models) { models.User.hasMany(models.Comment) } } });

  return User;

}
