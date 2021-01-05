const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname, '../../'),
  watchFolders: [
    path.resolve(__dirname, '../app/src'),
    path.resolve(__dirname, '../ui/src'),
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
