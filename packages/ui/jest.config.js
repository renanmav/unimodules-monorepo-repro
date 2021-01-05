module.exports = {
  displayName: '@Z1/ui',
  rootDir: './',
  preset: 'react-native-web',
  coverageReporters: ['lcov', 'html'],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', {cwd: __dirname}],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/stub.js',
    '.(woff|woff2|otf|ttf|eot|csv)$': '<rootDir>/test/stub.js',
  },
};
