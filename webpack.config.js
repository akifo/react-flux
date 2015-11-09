module.exports = {
    entry: './src/js/app.jsx',
    output: {
      filename: './build/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
