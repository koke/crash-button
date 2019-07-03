const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  devtool: 'source-map',
  externals: [
    {
        'react': 'require(\'react\')',
    },
    {
        'react-native': 'require(\'react-native\')',
    },
  ],
};
