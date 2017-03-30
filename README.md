# POWr FullStack Onboarding

#### Project: Comments
<img src='https://pbs.twimg.com/profile_images/775821222445592576/CmwF9aeq.jpg' align='right'>
We are very excited to have you beginning the POWr onboarding process and we hope you are too!

The purpose of this repository is to introduce you to some of the tools/techniques we use at POWr and test your ability to use/learn them while building a production-ready product.

If you have experience with the listed tools, it should take roughly **6 hours** to complete.  Not having experience with this environment does not disqualify you from succeeding, but you should expect it to take longer.

You will be building a **comments application**.  One of the most effective ways to build a community around any idea is to give that community the ability to discuss that idea!

If you're familiar with [Disqus](https://disqus.com/) - the concept should be rather intuitive. :)

Installation
---
These steps assume you have PostgreSQL running locally.

Mac   - see:https://postgresapp.com/.

1. `npm install`
2. `npm run dbusercreate` <- This may prompt you for your `sudo` password. You don't have to use it, but it makes the process easier generally.
3. `npm run dbinit`
4. `npm start`
5. Visit: localhost:8080

Goals
---
#### Your comments application should have the following minimal user-consumable features:

1. User **messages/posts**. A user should be able to post messages where other users can them consume/read those messages/posts. A post should contain at minimum the message, the author name, and when it was posted.
2. User messages/posts should **persist** on page refresh by being stored, preferably in a relational database (see next section)



#### Your comments application should have the following architectural features:

1. A front-end application written in **React**(w.Redux).
2. Application server written using **Node**(w.Express).
3. Relational database for persisting user data.  At POWr, we use **PostgreSQL**.  Its highly recommended that you do so as well.
4. The build process should be **Webpack**-centric.  This is less architectural, but reflects the notion that webpack is essential to our development process.

#### Bonus points:

1. Your application should be aesthetically pleasing and make the user **want to use it**. Take pride in what you're building.
2. User **accounts and sessions**.  A user should be able to login and maintain a session with your application.
3. Tests.  The world is ridden with buggy code.  Winter doesn't have to come.
![Tests]
(https://blog.testfort.com/wp-content/uploads/2014/12/q3.jpg)
4. Room **"owner"/"admin"** actions.  Most commonly a user with the ability to remove messages posted by other users.
5. Add the ability to **reply** to a particular comment

Resources
---
#### Below are a series of resources that you may find helpful when proceeding through your build

Webpack
---
* https://webpack.github.io/
* https://github.com/webpack/webpack-dev-middleware

React + Redux
---
* http://redux.js.org/
* https://facebook.github.io/react/docs/hello-world.html
* https://blog.risingstack.com/using-react-with-webpack-tutorial/

Node, Express, and NPM
---
* https://nodejs.org/dist/latest-v6.x/docs/api/synopsis.html
* http://expressjs.com/en/4x/api.html
* https://www.npmjs.com/

PostgreSQL
---
* http://docs.sequelizejs.com/en/v3/
* https://www.postgresql.org/
* http://exponential.io/blog/2015/02/21/install-postgresql-on-mac-os-x-via-brew/

Testing
---
* https://mochajs.org/
* http://chaijs.com/
* https://github.com/airbnb/enzyme

Once you feel that your application is complete, feel free to notify POWr and make a pull request on the master branch of this repo.

Happy coding!
