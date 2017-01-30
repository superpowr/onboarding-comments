var path              = require('path');
var webpack           = require('webpack');
var NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');
var BUILD_PATH        = path.resolve(__dirname, 'dist');
var MAIN_PATH         = path.resolve(__dirname, 'src','client','index.js'); //The root of the actual application

module.exports = {
    inline:true,
    devtool:'inline-source-map',
    description: "Project Athena - POWr X",
    entry: [  //Entry points are literally "webpack's entry points" - meaning that it loads the first file (and all of its dependencies/requirements) then the next, and the next etc... until its ready to produce an "output" file (eg a bundle.js)
        'whatwg-fetch',
        //Todo: Bring this back.
        // 'webpack-dev-server/client?http://localhost:8080/', 
        // 'webpack/hot/only-dev-server',
        MAIN_PATH
    ],
    output: {
        path:BUILD_PATH,
        publicPath:'/', //This actually doesnt "exist". But the webpack server (and hopefully middleware) will serve files when hit at that endpoint
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src'),
                exclude:[NODE_MODULES_PATH]
            },
            {
                test: /\.s?css$/,
                loaders:[
                    'style?sourceMap',//Source map just includes source map comments
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',//
                    'resolve-url',//This is for `url(...)` in css files
                    'sass?sourceMap'//Source map just includes source map comments
                ]
            },
            {   test: /\.styl$/, 
                loader: 'style-loader!css-loader!stylus-loader' 
            }
        ]
    },
    resolve: {
        alias: {
           Root:                __dirname
           ,Actions:            __dirname + '/src/client/actions'
           ,Client:             __dirname + '/src/client'
           ,Components:         __dirname + '/src/client/components'
           ,Containers:         __dirname + '/src/client/containers'
           ,Middleware:         __dirname + '/src/client/middleware'
           ,Reducers:           __dirname + '/src/client/reducers'
        }
    },
    sassLoader: {
      includePaths: [ 'src/client/themes' ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    webpackMiddleware: { 
      stats: {
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false
      },
    }
};
