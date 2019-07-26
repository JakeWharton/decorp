/* vim: set ft=javascript ts=2 et sw=2 tw=80: */
/* global describe it */
var assert = require('chai').assert;
var RegexBot = require('../src/regexbot');
var config = require('../src/config');
var rnd = 0;
var randomiser = function (max) { return rnd; };
regexbot = new RegexBot(config, randomiser);

describe('Regexbot', function () {
  it('should handle b.corp link', function () {
    var reply = '';

    regexbot.respond('https://b.corp.google.com/issues/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');

    regexbot.respond('check out https://b.corp.google.com/issues/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');

    regexbot.respond('https://b.corp.google.com/issues/135190668 blah blah', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');
  });

  it('should handle b.corp links with URL fragments', function () {
    var reply = '';

    regexbot.respond('https://b.corp.google.com/issues/135190668#comment1', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');

    regexbot.respond('check out https://b.corp.google.com/issues/135190668#comment1', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');

    regexbot.respond('https://b.corp.google.com/issues/135190668#comment1 blah blah', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');
  });

  it('should handle buganizer.corp link', function () {
    var reply = '';

    regexbot.respond('https://buganizer.corp.google.com/issues/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');

    regexbot.respond('check out https://buganizer.corp.google.com/issues/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');

    regexbot.respond('https://buganizer.corp.google.com/issues/135190668 blah blah', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');
  });

  it('should handle buganizer.corp links with URL fragments', function () {
    var reply = '';

    regexbot.respond('https://buganizer.corp.google.com/issues/135190668#comment1', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');

    regexbot.respond('check out https://buganizer.corp.google.com/issues/135190668#comment1', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');

    regexbot.respond('https://buganizer.corp.google.com/issues/135190668#comment1 blah blah', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668#comment1');
  });

  it('should handle b/ link', function () {
    var reply = '';

    regexbot.respond('b/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');

    regexbot.respond('check out b/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');

    regexbot.respond('b/135190668 blah', function (txt) {
      reply = txt;
    });
    assert.equal(reply, 'Public link: https://issuetracker.google.com/issues/135190668');
  });

  it('should ignore b/ link inside word', function () {
    var reply = '';

    regexbot.respond('foo.com/b/135190668', function (txt) {
      reply = txt;
    });
    assert.equal(reply, '');

    regexbot.respond('b/135190668/b', function (txt) {
      reply = txt;
    });
    assert.equal(reply, '');
  });

  it('should handle multiple links', function () {
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
