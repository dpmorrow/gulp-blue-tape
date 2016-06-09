'use strict';

var test = require('blue-tape');
var abs = require('../');

test('negative', function(t) {
  t.equal(abs(-1), 1);
  t.end();
});

test('positive', function(t) {
  t.equal(abs(1), 1);
  t.end();
});
