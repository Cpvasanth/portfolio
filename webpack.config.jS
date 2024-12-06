const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',  // Change to 'production' for production build
  module: {
    rules: [
      // Babel loader for transpiling JavaScript/JSX
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      // CSS loader for CSS Modules
      {
        test: /\.module\.css$/,  // Apply only to files with .module.css extension
        use: ['style-loader', 'css-loader?modules'],
      },
      // CSS loader for global styles (optional)
      {
        test: /\.css$/, 
        exclude: /\.module\.css$/,  // Exclude CSS modules to apply global CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Your HTML template
    }),
  ],
};
