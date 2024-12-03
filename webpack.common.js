const path = require('path');

module.exports = {
  entry: {
    app: './js/page1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/page1.js',
  },
};
