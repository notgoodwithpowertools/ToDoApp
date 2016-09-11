# Node Express Template

## Usage
- Go to the directory of the app to make that the working directory
- Launch the Express Server
```
working_dir> node /express_server_app_dir/app.js
```

## Added API response
- Install body-parser
```
$ npm install body-parser --save
```
- Update app.js
- Added access control for cross origin browsing

# Setting Up App Environment
## Install Prereqs
```
npm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react
```

run webpack from npm
```
"scripts": {
  "start": "webpack",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
compile code
```
npm start [--help] <= parses this parameter to webpack rather than npm
```
## Create webpack.config.js
- Use ```watch: true``` to monitor for changes
- Ensure presets for ```presets: ['react', 'es2015', 'stage-0']```
```
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  watch: true,
  resolve: {
    root: __dirname,
    alias: {
    },
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
  }
};
```

## Install react-router
```
npm install react-router --save-dev
```
Install Foundation support
```
npm install css-loader script-loader style-loader jquery foundation-sites --save-dev

```
Install SASS support
```
npm install sass-loader node-sass
```

# Testing
Install tools
```
npm install --save-dev karma karma-firefox-launcher karma-mocha karma-mocha-reporter karma-sourcemap-loader karma-webpack mocha expect
```
