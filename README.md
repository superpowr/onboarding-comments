# POWr FullStack Onboarding
####Project: Comments
We are very excited to have you beginning the POWr onboarding process and we hope you are too!

The purpose of this repository is to introduce you to some of the tools/techniques we use at POWr and test your ability to use/learn them while building a production-ready product.  If you have experience with the listed tools, it should take roughly **6 hours** to complete.  Not having experience with this environment does not disqualify you from succeeding, but you should expect it to take longer.

You will be building a **"comments" application**.  One of the most effective ways to build a community around any idea is to give that community the ability to discuss that idea! 

If you're familiar with [Disqus](https://disqus.com/) - the concept should be rather intuitive. :)

Goals
---
####Your comments application should have the following minimal user-consumable features:

1. User **accounts and sessions**.  A user should be able to login and maintain a session with your application.
2. Chat **'rooms'**.  This is open to iterpretation. However, at its most basic level - a **'website'** should have a **'room'** where messages can be posted.
3. User **messages/posts**.  A user should be able to post messages to a given room where other users can them consume/read those messages/posts
4.  Room **"owner"/"admin"** actions.  Most commonly a user with the ability to remove messages posted by other users.

####You comments application should have the following architectural features:

1. A front-end application written in **React**(w.Redux).
2. Application server written using **Node**(w.Express).
3. Relational database for persisting user data.  At POWr, we use **PostgreSQL**.  Its highly recommended that you do so as well.
4. The build process should be **Webpack**-centric.  This is less architectural, but reflects the notion that webpack is essential to our development process.

####(Highly recommended) Bonus points: 

1. Your application should be aesthetically pleasing and make the user **want to use it**. Take pride in what you're building.
2. Your application should have a convincing onboarding process.  Make it easy for the user to do *their* job. [Dont make the monkey mad](http://www.uxbooth.com/articles/10-usability-lessons-from-steve-krugs-dont-make-me-think/).
3. Tests.  The world is ridden with buggy code.  Winter doesn't have to come.
![Tests]
(https://blog.testfort.com/wp-content/uploads/2014/12/q3.jpg)
4. Integrate your application with a popular website builder. (We recommend trying [Weebly](https://www.weebly.com/developer/) - it's simple and free.)

Resources
---
####Below are a series of resources that you may find helpful when proceeding through your build:

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



