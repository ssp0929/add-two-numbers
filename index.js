'use strict'

const isNumber = require('is-number');

module.exports = function addTwoNumbers (x, y) { 
  if(isNumber(x) && isNumber(y)) {
    return x + y;
  } else {
    throw new Error('Invalid parameters supplied.');
  }
};