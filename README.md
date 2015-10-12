ligle-model-member
=====================
[![Build Status](https://travis-ci.org/a-oak/ligle-model-member.svg?branch=master)](https://travis-ci.org/a-oak/ligle-model-member)
[![Build Status](https://travis-ci.org/a-oak/ligle-model-member.svg?branch=develop)](https://travis-ci.org/a-oak/ligle-model-member)
Copyright (c) 2015 [A-Oak](http://a-oak.com/) Co. Ltd. under MIT LICENSE.


## INSTALL

```shell
npm install ligle-model-member --save
```

add this into your application to load the plugins

```js 
var ligle = require('ligle-engine')(cfg);
require('ligle-model-member')(ligle);
```

you can use `ligle.model.Member` class now.

## Provide:
1. login
2. logout
3. signup
4. forgot password

