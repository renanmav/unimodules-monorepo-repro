const pkg = require('./package');

module.exports = {
  displayName: pkg.name,
  rootDir: './',
  preset: 'react-native',
  coverageReporters: ['lcov', 'html'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', {cwd: __dirname}],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
