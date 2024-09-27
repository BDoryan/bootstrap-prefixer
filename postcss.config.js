// postcss.config.js
const classPrefixer = require('./postcss-class-prefixer');

module.exports = {
  plugins: [
    classPrefixer({ prefix: 'bp' })
  ]
};
