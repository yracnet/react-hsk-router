'use strict';

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.BUILD_PATH = './dist';

const fs = require('fs');
const pkg = require('../package.json');
const webpack = require('webpack');
const paths = require('react-scripts/config/paths');
const configFactory = require('react-scripts/config/webpack.config');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { exec } = require('child_process');

const deleteDist = () => {
  if (fs.existsSync(paths.appBuild)) {
    fs.rmSync(paths.appBuild, { recursive: true });
  }
};

const webpackCompile = () => {
  const config = configFactory('production');
  config.entry = paths.appSrc + '/module.tsx';
  config.output = {
    path: paths.appBuild,
    filename: 'module.js',
    library: pkg.name,
    //var, assign, this, window, self, global, commonjs, commonjs2, commonjs-module, amd, amd-require, umd, umd2, jsonp, syste,
    libraryTarget: 'amd',
  };
  config.optimization.minimize = true;
  config.optimization.splitChunks = undefined;
  config.optimization.runtimeChunk = undefined;
  config.externals = [nodeExternals()];
  const pluginsIgnore = ['HtmlWebpackPlugin', 'ManifestPlugin'];
  config.plugins = config.plugins
    .filter((it) => {
      const name = it?.constructor?.name;
      return !pluginsIgnore.includes(name);
    })
    .map((it) => {
      const name = it?.constructor?.name;
      if (name === 'MiniCssExtractPlugin') {
        it = new MiniCssExtractPlugin({
          filename: 'css/[name].css',
        });
      }
      return it;
    });
  const compiler = webpack(config);
  compiler.run((err, stats) => {
    console.log('WebPack Compile:: ', err);
  });
};

const generateDeclarationOnly = () => {
  exec('npx tsc -d --declarationDir ./dist --emitDeclarationOnly --noEmit false', (err, stdout, stderr) => {
    console.log('Generate DeclarationOnly', err, stdout, stderr);
  });
};

//deleteDist();
webpackCompile();
generateDeclarationOnly();
