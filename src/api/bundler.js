const webpack               = require('webpack');
const config                = require('../../webpack.config.js');
const webpackDevMiddleware  = require('webpack-dev-middleware');
const webpackHotMiddleware  = require('webpack-hot-middleware');

module.exports = function (app) {
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,//color logging
      chunks:false,//silence logging
      quiet: false,//silence logging
      noInfo: true//silence logging
    },
    watchOptions:{
      aggregateTimeout:300//num ms wait in between changes before recompile.  300ms is default.
    }
  }));
  app.use(webpackHotMiddleware(compiler));
};