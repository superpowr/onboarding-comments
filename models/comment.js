module.exports = function(sequelize, DataTypes){
  
  var Comment = sequelize.define('Comment', 

    // The comment model has one attribute: text.
    { text: DataTypes.TEXT },
    
    // A comment belongs to a user, of course.
    { classMethods: { associate: function(models) { models.Comment.belongsTo(models.User) } } });
  
  return Comment;

}