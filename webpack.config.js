var webpack = require('webpack');
var path = require('path'); // helps in resolving path namespaceURI

module.exports = {
    devtool: 'eval-source-map', //is going to give us the line numbers incase of any errors
    entry: [
      //'webpack-dev-server/client?http://127.0.0.1:8080', //is for the dev server
      //'webpack/hot/only-dev-server', // is for the hot or the live re-loading
      //'./src' // is the entry file for the webpack... nothing after SRC would consider index.js to be the entry file
      'webpack-dev-server/client?http://127.0.0.1:8080', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './src/index' // Your appʼs entry point
    ],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    resolve: { //resolve is the place where webpack is going to look for the files to be bundled
      modules: ['node_modules', path.join(__dirname, "src")],
      //extensions: ['', '.js', '.jsx']
    },
    module: { //module is the place where we define our loaders
      rules: [{
          test: /\jsx?/,
          exclude: [/node_modules/],
          //use: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2105']
          use: [
            { 
            	loader: 'react-hot-loader' 
            }, 
            {
              loader: 'babel-loader',
            }
            ]
          }]
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
    }