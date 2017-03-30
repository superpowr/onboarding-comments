const Promise            = require('bluebird');
const colors             = require('colors');
const figlet             = Promise.promisify(require('figlet'));
const morgan             = require('morgan');
const express            = require("express");
const session            = require('express-session');
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
const bcrypt = require ('bcrypt-nodejs');

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

      if (!IS_PRODUCTION) require('./bundler.js')(app); //Webpack

      app.set('models',db.sequelize.models);

      app.use(bodyParser.json({
        extended:true //see:https://www.npmjs.com/package/body-parser
      }));

      app.use(session({
        secret: 'POWRsPowerfulPower',
      }));

      // app.use(function printSession(req, res, next) {
      //   console.log('req.session', req.session);
      //   return next();
      // });
      var sess;
      app.get('/', function(req, res) {
        sess=req.session;
        sess.email
        res.sendFile(path.join(__dirname,"../../dist/index.html"));
      });

      app.post('/messages/room', function(req, res) {
        console.log(req.body)
        if(sess) {
          db.Message.findAll({
            where: {
              room_name: req.body.room
            }
          })
          .then((data) => {
            if(data === null) { data = []}
            res.status(200).send(data)
          })
        } else {
          res.status(200).send('fail')
        }
      })

      app.post('/signup', function(req, res) {
        var { email, password } = req.body;
        if(!email || !password) {
          res.status(404).send('no user found')
        }
         db.User.findOne({
          where: {
            email_address: email,
          }
        })
        .then((data) => { 
          if(data === null) {
            bcrypt.genSalt(10, function(err, salt) {
              if(err){ return next(err); }
              bcrypt.hash(password, salt, null ,function(err, hash) {
                if(err) { return next(err); }
                password = hash;
                db.User.create({
                  email_address: email,
                  password: password,
                  salt: salt
                })
                .then((data) => { 
                  sess.email = email;
                  res.status(200).send(email) 
                })
              })
            })
          } 
          else { 
            res.status(404).send('user taken')
          }
        })
      })

      app.post('/login', function(req, res) {
        let { email, password } = req.body;
        if(!email || !password) {
          res.status(404).send('no user found')
          return
        }
        db.User.findOne({
          where: {
            email_address: email,
          }
        })
        .then((data) => { 
          if(data !== null) {
            var retrievedSalt = data.salt;
            var retrivedPassword = data.password;
            bcrypt.hash(password, retrievedSalt, null ,function(err, hash) {
              if(err) { return next(err); }
              if(hash === retrivedPassword) {
                req.session.email = email;
                res.status(200).send(email)
              } else{
                res.status(404).send('no user found')
              }
            })
          } else {
            res.status(404).send('no user found')
          }
        })
      })

      app.post('/messages/posts', function(req, res) {
        const { author, room, message } = req.body;
        db.Message.create({ 
          author_name: author, 
          text: message,
          room_name: room
        })
        .then(() => {
          db.Message.findAll({
            where: {
              room_name: room
            }
          })
          .then((data) => {
            res.status(200).send(data)
          })
        })
        .catch((err) => {
          if (err.errors && err.errors[0].type === 'unique violation') {
            db.Message.create({ 
              author_name: author, 
              text: message
            }) 
            .then(() => {
              db.Message.findAll()
              .then((data) => {
                res.status(200).send(data)
              })
            })
          } else { res.status(404).send('random error', err)}
        })
      })

      app.use(serveStatic(path.join(__dirname,"../../dist")));

      app.use(function(req,res,next){// If you get here, then nothing was able to field the request.
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



