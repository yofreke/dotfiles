const path = require('path');


const EXTERNALS = [];


const configure = function (configurator, options) {
  const backendBuild = true;

  configurator.merge({
    entry: {
      dotfiles: path.resolve(__dirname, 'src', 'index')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      libraryTarget: 'commonjs'
    },
    externals: EXTERNALS
  });

  options.backendBuild = backendBuild;
  options.backendOptions.useSourceMapSupport = process.env.NODE_ENV === 'development';
  options.devtool = 'source-map';

  options.ifdefOpts.GCF_BUILD = backendBuild;
};


const postConfigure = function (configurator, options) {
};


const mainConfig = {
  configure: configure,
  postConfigure: postConfigure
};


module.exports = [
  mainConfig
];
