const path = require('path');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: rootPath,
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@MyApp/ui': path.join(rootPath, 'ui/src'),
        },
      },
    ],
  ],
};
