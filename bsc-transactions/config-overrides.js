const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
    crypto: path.resolve(__dirname, 'node_modules/crypto-browserify'),
    path: path.resolve(__dirname, 'node_modules/path-browserify'),
    os: path.resolve(__dirname, 'node_modules/os-browserify/browser'),
    assert: path.resolve(__dirname, 'node_modules/assert'),
  })
);
