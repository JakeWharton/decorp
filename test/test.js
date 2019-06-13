/* vim: set ft=javascript ts=2 et sw=2 tw=80: */
/* global describe it */
var assert = require('chai').assert;
var RegexBot = require('../src/regexbot');
var config = require('../src/config');
var rnd = 0;
var randomiser = function (max) { return rnd; };
regexbot = new RegexBot(config, randomiser);

describe('Regexbot', function () {
  it('should handle basic b.corp link', function () {
    var reply = '';

    regexbot.respond('check out https://b.corp.google.com/issues/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');
  });

  it('should handle b.corp links with URL fragments', function () {
    var reply = '';
    regexbot.respond('check out https://b.corp.google.com/issues/135190668#comment1', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');
  });

  it('should handle multiple b.corp links', function () {
    var reply = '';
    regexbot.respond('check out https://b.corp.google.com/issues/135190668 and https://b.corp.google.com/issues/135190669', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668\nPublic link: https://issuetracker.google.com/issues/135190669');
  });

  it('should ignore issuetracker links', function () {
    var reply = '';
    regexbot.respond('check out https://issuetracker.google.com/issues/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, '');
  });

});
