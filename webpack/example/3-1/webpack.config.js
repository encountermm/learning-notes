// import { Configuration } from 'webpack'

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        // 直接使用相对路径
        // use: './markdown-loader'
        use: ['html-loader', './markdown-loader']
      }
    ]
  }
}
