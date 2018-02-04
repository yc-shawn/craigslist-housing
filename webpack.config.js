require('dotenv').config();
var path = require('path');
var webpack = require('webpack');

var ASSET_PATH = 'public/assets/'

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
    publicPath: 'public/js/'
    // public path is where you put in to the link: <script src='publicPath/**'></script>
  },
  module: {
    loaders: [{
      test: /\.js$/, // find all js file
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
      }
    }, {
      test: /\.sass$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '/'),
    compress: true,
    stats: "errors-only",
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "env": {
        "debug": JSON.parse(process.env.DEBUG),
        "assets": JSON.stringify(ASSET_PATH),
        "api": JSON.stringify(process.env.API),
        "GOOGLE_MAP_API_KEY": JSON.stringify(process.env.GOOGLE_MAP_API_KEY),
        "data": JSON.stringify('public/data/')
      }
    })
  ]
};
