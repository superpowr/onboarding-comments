const Promise            = require('bluebird');
const colors             = require('colors');
const figlet             = Promise.promisify(require('figlet'));
const morgan             = require('morgan');
const express            = require("express");
const db                 = require('../../models');//Bootstraps the entire database.
const bodyParser         = require('body-parser');
const app                = express();
const path               = require('path');
const serveStatic        = express.static;
const PORT               = 8080;
const middlwareError     = 'You made it to the no-no middleware. If you\'re confused, see:http://expressjs.com/en/guide/using-middleware.html';
const IS_PRODUCTION      = false;
const introAscii         = '   POWr';
const introAscii2        = 'Comments';
const asciiFont          = 'Isometric2';

figlet(introAscii,{font:asciiFont})
.then(introMessage => {
  console.log(introMessage.green);
  return figlet(introAscii2,{font:asciiFont})
})
.then(introMessage => {
  console.log(introMessage.green);
})
.then(nothing =>{
  db.sequelize
    .sync()
    .then(()=>{

      if (!IS_PRODUCTION) require('./bundler.js')(app); // Webpack

      app.set('models',db.sequelize.models);

      app.use(bodyParser.json({
        extended: true
      }));

      app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname,"../../dist/index.html"));
      });

      // POST /user
      app.post('/user', function(req, res) {
        
        // Find or create the current user, send it back to the client
        // Could replace all of this with a sequelize FindOrCreate method
        // Should also run validations on the user input, to make sure it's a good email
        db.User.find({
          where: { email_address: req.body.email } 
        })
        .then(function(user) {
          // Create the user, if no user exists
          if (user === null) {
            user = db.User.create({ email_address: req.body.email })
          }
          // Send the user to the view
          res.status(200).send({ user: user });
        });
      });

      app.use(serveStatic(path.join(__dirname,"../../dist")));

      // GET /comments
      app.get('/comments', function(req, res) {

        // Get all comments, and eager load the associated users
        db.Comment.findAll({ 
          include: [{ model: db.User }]
        })
        // Send everything to the view
        .then(function(comments) {
          res.status(200).send({ 
            comments: comments 
          })
        });
      });

      // POST /comments
      app.post('/comments', function(req, res) {
        
        // Get the current user from the database
        db.User.find({ 
          where: { email_address: req.body.email } 
        })
        // Then, create a new comment with text provided, and current user id
        .then(function(user) {
          db.Comment.create({ 
            text: req.body.text, 
            UserId: user.id 
          })
          // Pass the new comment to a new function
          .then(function(new_comment) {

            // Here, we find the new comment, but eager load the associated user
            // This CANNOT be the best way to do this, but it works in the meantime
            db.Comment.find({ 
              where: { id: new_comment.id }, 
              include: [{ model: db.User }]
            })
            // Finally, pass the new comment with its user to the view
            .then(function(new_comment_w_user) {
              res.status(200).send({ comment: new_comment_w_user });
            })
          });
        });
      });

      // If you get here, then nothing was able to field the request
      app.use(function(req,res,next){
        res.send(JSON.stringify({
          success:false,
          data:middlwareError
        }))
      });

      app.listen(PORT, function () {
        console.log('Server running on port ' + PORT);
      });
    }
  );
})



