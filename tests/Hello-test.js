const test = require('tape');
const Hello = require('../scripts/Hello');

test('Hello', t => {
  t.ok(Hello instanceof Function, 'should be function');
  t.end();
});