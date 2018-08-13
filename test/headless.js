global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../data/data.json'),
};
require('../src/data');
require('./data.spec.js');
