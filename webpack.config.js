const path = require('path')

module.exports = env => ({
  entry: './main.js',
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true,
    host: '0.0.0.0'
  },
  mode: env,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
})
