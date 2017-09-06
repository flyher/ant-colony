const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSCSS = new ExtractTextPlugin({ filename: 'css/style.css', disable: false, allChunks: true })
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    'scripts/last': [
      './src/lib/redirect.js',
      './src/lib/ga.js'
    ],
    // 'scripts/common': [
    //   './src/lib/jquery.qrcode.js',
    //   './src/lib/qrcode.js'
    //   // './script/lib/jquery-1.8.3.js'
    //   // './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    //   // './node_modules/bootstrap/dist/css/bootstrap.min.css',
    //   // './node_modules/bootstrap/dist/js/bootstrap.min.js'
    // ],
    // './common/main': path.resolve(__dirname,'src/index.js'),
    // 'scripts/vendor': ['vue', 'vue-router', 'axios'],
    // 'scripts/vendor':
    // 'scripts/index':
    'scripts/index': [
      path.resolve(__dirname, './src/entry/index.js')
    ],
    'scripts/qr': [
      path.resolve(__dirname, './src/entry/qr.js')
    ],
    'scripts/wb': [
      path.resolve(__dirname, './src/entry/wb.js')
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: process.env.NODE_ENV === 'release' ? '/dist/' : 'http://localhost:8889/dist/',
    filename: '[name].bundle.js' // '[name].js?[hash]'
  },
  module: {
    rules: [
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
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   //     loader: 'file-loader',
      //   //     options: {
      //   //       name: '[name].[ext]?[hash]'
      //   //     }
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000,
      //         name: path.posix.join('assets', 'img/[name].[ext]')
      //       }
      //     },
      //     {
      //       loader: 'image-webpack-loader',
      //       query: {
      //         mozjpeg: {
      //           progressive: true
      //         },
      //         gifsicle: {
      //           interlaced: false
      //         },
      //         optipng: {
      //           optimizationLevel: 7
      //         },
      //         pngquant: {
      //           quality: '60-80',
      //           speed: 4
      //         }
      //       }
      //     }
      //   ],
      //   exclude: /node_modules/,
      //   include: __dirname
      // },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.vue', '.js', '.css', '.scss']
    // extensions: ['.js', '.vue', '.json'],
    // alias: {
    //   'vue$': 'vue/dist/vue.esm.js'
    // }
  },
  plugins: [
    extractSCSS,
    // 合并文件
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['common'],
    //   filename: 'common.js',
    //   minChunks: Infinity
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    //   }
    // }),
    new CleanWebpackPlugin(
      // 匹配删除的文件
      // ['dist/scripts', 'dist/css', 'dist/src', 'dist/*.js'],
      ['dist/*'],
      {
        // 根目录
        root: __dirname,
        // 开启在控制台输出信息
        verbose: true,
        // 启用删除文件
        dry: false
      }
    ),
    // 拷贝文件
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname) + '/src/*.html',
      to: path.resolve(__dirname) + '/dist',
      toType: 'dir', // 可选，默认是文件 file 或者 dir
      force: true, // 强制覆盖先前的插件
      flatten: true,
      ignore: ['.*']
    }])
  ],
  devtool: '#eval-source-map'
}
