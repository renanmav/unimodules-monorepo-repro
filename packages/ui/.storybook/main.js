module.exports = {
  stories: [
    '../src/**/*.stories.js',
    '../src/**/*.stories.ts',
    '../src/**/*.stories.tsx',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      'react-native': 'react-native-web',
    };

    return config;
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
