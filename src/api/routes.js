const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt-nodejs');
const Promise = require('bluebird');

module.exports = (app, db) => {
  
  router.post('/users/login', login);
  router.post('/users/signup', signup);
  router.get('/users/logout', logout);
  router.post('/messages/create', createMsg);
  router.post('/messages/get', getMsgs);
  router.post('/messages/comment', createComment);
  router.get('/users/isAuthenticated', isAuthenticated);
  
  app.use(router);

  function hashPassword(password, cb) {
    bcrypt.genSalt(5, (err, salt) => {
      if (err) return cb(err)
      bcrypt.hash(password, salt, null, (err, hash) => {
        if (err) return cb(err);
        cb(null, hash);
      })
    })
  }

  function comparePassword(entered, existing, cb) {
    bcrypt.compare(entered, existing, (err, isMatch) => cb(err, isMatch));
  }

  function isAuthenticated(req, res, next) {
    db.Message.findAll({
      include: [
        { model: db.User },
        { model: db.Message, as: 'Comments' },
      ]
    })
    .then((messages) =>  {
      if (req.session && req.session.user) {
        res.status(200).send({ user: req.session.user, messages: messages });
      } else {
        res.status(401).send({ user: null, messages: messages });
      }
    });
  }

  function createMsg(req, res, next) {
    db.Message.create({
     body: req.body.message,
     UserId: req.body.user.id
    })
    .then((message) => {
      res.status(200).send({ message: message });
    });
  }

  function createComment(req, res, next) {
    db.Message.create({
     body: req.body.reply,
     UserId: req.body.user.id,
     authorName: req.body.user.username,
     MessageId: req.body.messageId
    })
    .then((comment) => {
      res.status(200).send({ messageId: req.body.messageId, comment: comment });
    });    
  }

  function getMsgs(req, res, next) {
    db.Message.findAll({
      include: [
          { model: db.User },
          { model: db.Message, as: 'Comments' }
        ]
    }).then((messages) => {
      res.status(200).send({ messages: messages });
    });  
  }
  
  function login(req, res, next) {
    db.User.findAll({ where: { username: req.body.username } })
      .then((user) => {
        if (Array.isArray(user) && user.length) {
          comparePassword(req.body.password, user[0].password, (err, isMatch) => {
            if (err) return next(err);
            if (!isMatch) {
             res.status(200).send( { errMessage: 'invalid password' });
            } else {
              req.session.user = user[0];
              req.session.save((err) => {
               res.status(200).send( { user: user[0] });
              });
            }
        });
        } else {
          console.log('in else')
          res.status(200).send( { errMessage: 'no user found with that username' });
        }          
    });
  }

  function logout(req, res, next) {
    req.session.destroy((err) => {
      res.status(200).send({});
    });
  }

  function signup(req, res, next) {
    hashPassword(req.body.password, (err, hashedPassword) => {
      if (err) return next(err);
      db.User.create({
       username: req.body.username,
       password: hashedPassword,
      })
      .then((user) => {
        user.password = undefined;
        req.session.user = user;
        req.session.save(() => {
          res.status(200).send( { user: user });
        });
      });
    });
  }
}
