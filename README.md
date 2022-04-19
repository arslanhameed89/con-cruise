<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Pre-requisites
- NodeJS (`>=14.1.2`)
- MONGODB (`>= 4.0`)
---
## Prepare ENV
* Copy `.env.example` to `.env`

**SET APP LEVEL PARAMS**
```shell script
APP_NAME=CON-CRUISE-API
PORT=3000
NODE_ENV=development
```

**SET PORT**
```shell script
PORT=3000
```

**MONGODB CONNECTION**
```shell script
MONGODDB_CONNECTION_STRING=mongodb://localhost/con-cruise
```
**DEFAULT PAGINATION**
```shell script
PAGINATION_PER_PAGE=40
```

**MAX RADIUS DISTANCE KM**
```shell script
MAX_RADIUS_DISTANCE_KM=50
```

**SWAGGER LINK**

```shell script
http://localhost:3000/api/
```

## Dependency Installation
```bash
$ npm install
```

## Running the app in development
---
```bash
# development 
$ npm run start:dev
```

## Running the app in Production + Staging
---
#### Build
```bash
# It will create build inside dist
$ npm run build 
```

#### Start
```bash
pm2 start npm --name "cron-cruise" -- run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

**RUN SEEDERS FOR CUSTOMER AND DRIVERS DATA**

For Customers
```shell script
npx nestjs-command seed:customer
```

For Drivers
```shell script
npx nestjs-command seed:driver
```

**CLI COMMANDS TO VIEW OUTPUT**

List all existing Customers
```shell script
npx nestjs-command list:customer
```

List all existing drivers
```shell script
npx nestjs-command list:cruiser
```

To match drivers by using mongo 2dSphere index and calculate weightage
```shell script
npx nestjs-command list:match
```
to list all commands and args
```shell script
npx nestjs-command manual:help
```

exit the cli and rest of application
```shell script
npx nestjs-command exit
```
