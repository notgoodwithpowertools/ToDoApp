var webpack = require('webpack');

var path = require('path');

var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//process.env.NODE_ENV = 'production';

var fileName = path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env');
console.log("fileName:", fileName);
/*
var fs = require('fs'),
    env = require('node-env-file');

if (fs.existsSync(__dirname + '/config/development.env' )) {
  console.log("Success...");
  env(__dirname + '/config/development.env')
}

console.log("Secret: " + process.env.AUTH_DOMAIN);
*/

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}
//console.log("envFile:", envFile);
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
//console.log("process.env.DATABASE_URL:", JSON.stringify(process.env.AUTH_DOMAIN));


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  watch: false,
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components'
    ],

    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};
