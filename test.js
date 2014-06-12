#!/usr/bin/env node
var tTest = require('transformer-test');
var type = require('./');

// run stock type tests
var test = tTest.type(type);


// that should be enough, but you can also run your own tests:
/*

test('your test description', function (t) {
  YOUR TEST CODE HERE
  t.end();
});

*/
