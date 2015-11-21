# R^2 IE8 Template

> R2-ie8-template is made for IE8 support and based on react plus redux.

[![Travis Build Status][build-badge]][build]
[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![Heroku][heroku-deployment-badge]][heroku-app]

### Get Started

Clone this repo and make something awesome!

```
$ git clone https://github.com/tpai/r2-ie8-template.git
$ cd r2-ie8-template
$ npm install
```

### Run Web Server

```
$ npm run server &
```

As background job.

### Start Developing

```
$ npm start
```

Using webpack watch to detect every changes you make then compile.

> Be sure to open development tool first when debugging. (IE8 can't identify 'console' before open it)

### How to Build

```
$ npm run build
```

It'll compile, compress and minimize then export to 'dist/bundle.js' for replease.

### Kill NPM Services

```
$ npm run kill
```

Sometimes node still called dibs on 8080 port after Ctrl-C, use this to kill all node process.

[build-badge]: https://travis-ci.org/tpai/r2-ie8-template.svg?branch=master
[build]: https://travis-ci.org/tpai/r2-ie8-template

[deps-badge]: https://david-dm.org/tpai/r2-ie8-template.svg
[deps]: https://david-dm.org/tpai/r2-ie8-template

[dev-deps-badge]: https://david-dm.org/tpai/r2-ie8-template/dev-status.svg
[dev-deps]: https://david-dm.org/tpai/r2-ie8-template#info=devDependencies

[heroku-deployment-badge]: https://heroku-badge.herokuapp.com/?app=r2gw-ie8-template
[heroku-app]: http://r2-ie8-template.herokuapp.com