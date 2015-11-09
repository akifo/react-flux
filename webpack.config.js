module.exports = {
    entry: './src/js/app.jsx',
    output: {
      filename: './dist/js/app.js'
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
