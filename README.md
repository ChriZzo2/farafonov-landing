import { merge } from 'webpack-merge';
import webpack from 'webpack';
import pkg from './package.json';
import { webpackBase } from './configs/webpack.base';
import { ModuleFederationPlugin } from '@module-federation/enhanced';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { sentryWebpackPlugin } from '@sentry/webpack-plugin';

const deps = pkg.dependencies;
const [org, projectName] = pkg.name.split('/');

const config: webpack.Configuration = {
  entry: './src/root.component.tsx',
  output: {
    filename: `${org.slice(1)}-${projectName}.js`,
    libraryTarget: 'system',
    uniqueName: projectName,
    devtoolNamespace: projectName,
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: `${org.slice(1)}_${projectName.split('-').join('_')}`,
      filename: `${projectName}.js`,
      exposes: {
        './routes': './src/router/RouterApp',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
        '@reduxjs/toolkit': {
          singleton: true,
          requiredVersion: deps['@reduxjs/toolkit'],
        },
        'domrf-ui': {
          singleton: true,
        },
        'domrf-ui/build/helpers/AuthenticationEmployee': {
          eager: true,
          singleton: true,
        },
      },
      manifest: {
        fileName: `${projectName}-manifest.json`,
      },
    }),
    sentryWebpackPlugin({
      moduleMetadata: ({ release }) => ({
        dsn: 'PLATFORM',
        release,
      }),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

const devConfig = {
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9008,
    historyApiFallback: true,
  },
};

const standaloneConfig = {
  entry: './standalone/index.tsx',
  output: { publicPath: '/' },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'standalone/index.html',
      inject: true,
    }),
  ],
};

const mergedConfig = (_, argv) => {
  const isDev = argv.mode === 'development';
  const isStandalone = argv.env.standalone;


  const finalConfig: webpack.Configuration = {
    ...config,
    mode: argv.mode,
    optimization: {
      concatenateModules: false,
    },
    devtool: 'hidden-source-map',
    ...(isDev ? devConfig : {}),           
    ...(isStandalone ? standaloneConfig : {}), 
  };

  return merge(finalConfig, webpackBase as webpack.Configuration);
};

export default mergedConfig;

