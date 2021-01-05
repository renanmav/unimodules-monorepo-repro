const babelJest = require('babel-jest');
const babel = require('@MyApp/babel');

module.exports = babelJest.createTransformer(babel);
