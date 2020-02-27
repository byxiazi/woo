const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths')
const envConf = require('../conf/env')

module.exports = function (gConf, env, options) {
  const config = gConf.config
  const { title, description } = config

  const isEnvDevelopment = env === envConf.dev
  const isEnvProduction = env === envConf.prod
  process.env.BABEL_ENV = 'development'
  process.env.NODE_ENV = 'development'
  if (isEnvProduction) {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
  }

   // common function to get style loaders
   const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        // publicPath is the relative path of the resource to the context
        options: Object.assign(
          {},
        ),
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
          ],
          sourceMap: isEnvProduction,
        },
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: isEnvProduction,
        },
      });
    }
    return loaders;
  };

  return {
    mode: 'development',
    entry: {
      app: paths.appIndexJs,
    },
    devtool: 'inline-source-map',
    module: {
      strictExportPresence: true,
      rules: [
        {
          oneOf: [
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: [paths.appSrc, paths.appPublic],
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),
                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                        },
                      },
                    },
                  ],
                ],
                cacheDirectory: true,
                cacheCompression: isEnvProduction,
                compact: isEnvProduction,
              },
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [
                  [
                    require.resolve('babel-preset-react-app/dependencies'),
                    { helpers: true },
                  ],
                ],
                cacheDirectory: true,
                cacheCompression: isEnvProduction,
                sourceMaps: false,
              },
            },
            {
              test: /\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction,
              }),
              sideEffects: true,
            },
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        description,
        template: path.resolve(paths.appPublic, 'template.html')
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve('dist'),
      publicPath: '/'
    }
  }
}
