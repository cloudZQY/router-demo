module.exports = {
  entry: [
    './react/component/main.js',
    './react/css/main.css'
    ],
  output: {
    filename: './react/dist/bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: './react/index.html',
      rewrites: [
        { from: /\/react/, to: '/react/index.html'}
      ]
    }
  }
};