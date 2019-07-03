const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");
const path = require( 'path' );

module.exports = {
  ...defaultConfig,
  output: {
    ...defaultConfig.output,
    library: 'crash-button',
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  externals: {
    'react': 'react',
    'react-native': 'react-native',
  }
};
