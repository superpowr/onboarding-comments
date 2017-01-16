// Mon Nov 14 17:17:09 PST 2016
// Script to create powrx db.
//  ____  ____         ____ ____  _____    _  _____ _____
// |  _ \| __ )       / ___|  _ \| ____|  / \|_   _| ____|
// | | | |  _ \ _____| |   | |_) |  _|   / _ \ | | |  _|
// | |_| | |_) |_____| |___|  _ <| |___ / ___ \| | | |___
// |____/|____/       \____|_| \_\_____/_/   \_\_| |_____|
var colors    = require('colors');
var Sequelize = require('sequelize');
var pg        = require('pg');

var doThing = function(conf) {
    var dbName     = 'powr_comments_onboarding_db',
        username   = 'postgres',
        password   = '',
        host       = 'localhost',
        testDbName = dbName + 'test'

    var conStringPri  = 'postgres://' + username + ':' + password + '@' + host + '/postgres';
    // var conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

    // connect to postgres db
    pg.connect(conStringPri, function(err, client, done) {
        console.log(err)
        // create the db and ignore any errors, for example if it already exists.
        client.query('CREATE DATABASE ' + dbName, function(err) {
            if (err){
              console.log((`Database ${ dbName } already exists. Fail :(`.red));
              return client.end(); // close the connection
            }

            console.log((`Database ${ dbName } created! Good job. :]`).green);
            //db should exist now, initialize Sequelize
            client.query('CREATE DATABASE ' + testDbName, function(err) {
                if (err){
                  console.log((`Database ${ testDbName } already exists. Fail :(`.red));
                  return client.end(); // close the connection
                }

                console.log((`Database ${ testDbName } created! Good job. :]`).green);
                //db should exist now, initialize Sequelize
                client.end(); // close the connection
            });
        });
    });
};

doThing();
