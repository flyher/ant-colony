const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSCSS = new ExtractTextPlugin({ filename: 'css/style.css', disable: false, allChunks: true });


module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // 手动引入 karma 的各项插件，如果不显式引入，karma 也会自动寻找 karma- 开头的插件并自动引入
    plugins: [
      'karma-coverage-istanbul-reporter',
      'karma-mocha',
      'karma-sinon-chai',
      // 'karma-jasmine',
      'karma-phantomjs-shim',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // 设定要使用的 frameworks
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    // list of files / patterns to load in the browser
    // 入口文件，按照 istanbul-instrumenter-loader 的要求来写
    files: [
      // './dist/scripts/app.bundle.js',
      // './test/unit/r1.spec.js'
      './test/index.js'
    ],
    // list of files to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 加入 webpack 与 sourcemap 插件
    preprocessors: {
      // './src/entry/app.js': ['webpack', 'sourcemap'],
      './test/index.js': ['webpack', 'sourcemap']
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 设定报告输出插件： spec 和 coverage-istanbul
    reporters: ['spec', 'coverage-istanbul'],
    // coverage-istanbul 输出配置，报告文件输出于根目录下的 coverage 文件夹内
    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
      reports: ['html', 'lcovonly', 'text-summary'],
      // base output directory
      dir: './coverage',
      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,
      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    },
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    // 设定终端上不输出 webpack 的打包信息
    webpackMiddleware: {
      noInfo: true
    },
    // 用来预编译源代码的 webpack 配置，基本就是项目的 webpack 配置，但要去掉 entry 属性
    // webpack config
    webpack: {
      output: {
        path: './dist',
        filename: '[name].bundle.js',
        libraryTarget: 'umd'
      },
      module: {
        rules: [
          // {
          //   test: /\.html$/,
          //   use: {
          //     loader: 'html-loader'
          //   }
          // },
          {
            test: /\.scss$/,
            // use: ['style-loader', 'css-loader', 'sass-loader']
            use: extractSCSS.extract({
              fallback: 'style-loader',
              publicPath: '/',
              use: ['css-loader', 'sass-loader', 'postcss-loader']
            })
          },
          {
            test: /\.(js|vue)$/,
            // eslint
            loader: 'eslint-loader',
            enforce: 'pre',
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                'scss': 'vue-style-loader!css-loader!postcss-loader!sass-loader'
              }
            }
            //     include: /src/,
            //     use: [{
            //       loader: 'eslint-loader',
            //       options: {
            //         formatter: require('eslint-friendly-formatter')
            //       }
            //     }]

            // Uncaught TypeError: Cannot read property '_init' of undefined
            // Vue is a constructor and should be called with the `new` keyword'
            // include: path.join(__dirname, "src"),
            // exclude: /node_modules/,
            // options: {
            //   loaders: {
            //     scss: extractSCSS.extract({
            //       use: ['css-loader', 'sass-loader', 'postcss-loader'],
            //       fallback: 'style-loader'
            //     })
            //   }
            // }
          },
          {
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader' // ['babel-loader', 'eslint-loader']
            }
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            // loader: 'file-loader',
            // options: {
            //   name: '[name].[ext]?[hash]'
            // },
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join('assets', 'img/[name].[ext]')
                }
              },
              {
                loader: 'image-webpack-loader',
                query: {
                  mozjpeg: {
                    progressive: true
                  },
                  gifsicle: {
                    interlaced: false
                  },
                  optipng: {
                    optimizationLevel: 7
                  },
                  pngquant: {
                    quality: '60-80',
                    speed: 4
                  }
                }
              }
            ],
            exclude: /node_modules/,
            include: __dirname
          },
          // {
          //   test: /\.(jpe?g|png|gif|svg)$/i,
          //   loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          //     loader: 'image-webpack-loader',
          //     query: {
          //       mozjpeg: {
          //         progressive: true
          //       },
          //       gifsicle: {
          //         interlaced: false
          //       },
          //       optipng: {
          //         optimizationLevel: 4
          //       },
          //       pngquant: {
          //         quality: '75-90',
          //         speed: 3
          //       }
          //     }
          //   }],
          //   exclude: /node_modules/,
          //   include: __dirname
          // },
          { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
          { test: /\.(ttf|eot)$/, loader: 'file-loader' }
          // {
          //   test: /\.(gif|png|jpe?g|svg)$/i,
          //   use: [
          //     'file-loader',
          //     {
          //       loader: 'image-webpack-loader',
          //       options: {
          //         bypassOnDebug: true
          //       }
          //     }
          //   ]
          // }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        })
      ]
    }
  });
};
