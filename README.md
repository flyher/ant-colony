# ant-colony

[![Build Status](https://travis-ci.org/flyher/ant-colony.svg?branch=master)](https://travis-ci.org/flyher/ant-colony?branch=master)
[![Release Version](https://img.shields.io/github/release/flyher/ant-colony.svg)](https://github.com/flyher/ant-colony/releases)
[![Issues](https://img.shields.io/github/issues/flyher/ant-colony.svg)](https://github.com/flyher/ant-colony/issues)
[![Software License](https://img.shields.io/github/license/flyher/ant-colony.svg)](https://github.com/flyher/ant-colony/blob/master/LICENSE)

A single page web application, base on Vuejs, Webpack, ES6 and bootstrap. 

You can visit this website here:

[Mirror 1](https://tools.99diary.com)

[Mirror 2](https://www.99diary.com/ant-colony/)

[Simplified Chinese](README-CN.md)

### todo list

- [x] create QR from url

- [x] decode weibo url from the picture url  [here](https://www.v2ex.com/t/388152)

- [x] redirect to your website without referrer

- [x] decode [jwt](https://en.wikipedia.org/wiki/JSON_Web_Token)

- [x] decode/encode base64

- [x] json data format

### install


```shell
npm install
```

start
```
npm start //test code
```

package and open website in localhost:8889

debug code in `http://localhost:8889/dist/index.html` and we should change import js file from `localhost:8889` in `index.html`
```
npm run local
```


dev

we can import in `index.html` from `./dist/`
```shell
npm run dev
```

release

the code will release in `./dist/`
```
npm run release
```


### Q&A 

[vue2-webpack-es6](https://github.com/yaoyonstudio/vue2-webpack-es6)

[vue-hackernews](https://github.com/vuejs/vue-hackernews)

[vue2-demo](https://github.com/lzxb/vue2-demo)

[Upgrading to babel-preset-env](http://babeljs.io/env)

[Import image error: The system cannot find the path specified](https://github.com/tcoopman/image-webpack-loader/issues/68)

### Tools

Build By Visual Studio Code

### License

Code in ant-colony project is licensed under the GPL
