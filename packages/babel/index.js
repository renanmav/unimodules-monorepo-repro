const path = require('path');

const rootPath = path.resolve(__dirname, '..');

const baseConfig = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    [
      'module-resolver',
      {
        cwd: rootPath,
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@MyApp/app': path.join(rootPath, 'app/src'),
          '@MyApp/ui': path.join(rootPath, 'ui/src'),
        },
      },
    ],
  ],
};

module.exports = {
  ...baseConfig,
  env: {
    test: {
      ...baseConfig,
      plugins: [
        '@babel/plugin-transform-runtime',
        'dynamic-import-node',
        '@babel/plugin-syntax-dynamic-import',
        ...baseConfig.plugins,
      ],
    },
  },
};
