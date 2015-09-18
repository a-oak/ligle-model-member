
var crypto = require('crypto');
var uuid = require('uuid');
var ms = require('ms');
var moment = require('moment');

var STATUS = {
  unsent: '未发送验证',
  unverified: '未验证',
  verified: '已验证',
};
var TYPE = {
  signUp: 'signUp',
  reset: 'reset',
};

var defaultCfg={
  appname: 'demo', //发邮件的时候使用
  email: {
    routes: {
      signUp: '/regist',
      verify: '/verify',
      reset: '/forgot-password',
      verifyReset: '/verifyReset',
    },
    urlSent: {// 发送到邮件使用的路由
      signUp: '/verify',
      reset: '/verifyReset',
    },
    token: {
      expire: '1 day',
    },
  },
  cell: {
    routes: {
      signUp: '/registSMS',
      reset: '/forgotPwSMS',
    },
    token: {
      resendInterval: '60 s',
      expire: '10 min',
    },
  },
  host: 'http://localhost:4000', //邮箱链接使用的host名字。
  loggerName: 'ligle-model-member',
  loggerLevel: 'TRACE',
};

module.exports = function(ligle,cfg){
  if (ligle.model.Member) {
    return;
  }
  var config = ligle.util.configure(cfg,defaultCfg);
  var engineLogLevel = ligle.cfg.loggerLevel;
  if (engineLogLevel){  // use loggerLevel of engine.
    config = ligle.util.configure({loggerLevel:engineLogLevel},config);
  }

  var logger = ligle.util.logger(config.loggerName,config.loggerLevel);
  module.exports.logger = logger;
  module.exports.cfg = config;
  module.exports.ligle = ligle;
  logger.trace('defining Member model',config);
  // 模型
  var Model  = require('./member.js');
  ligle.model.Member = Model;
  ligle.model.Member.cfg = config;
};
