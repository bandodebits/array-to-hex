'use strict';

/**
 *
 * @param {Array} array
 * @param {type} type
 * @returns {string}
 */
module.exports = function arrayToHex(array, type) {
  if (!array || array.length === 0 || array.constructor !== type) return '';
  var hex, i;
  var result = '';
  for (i = 0; i < array.length; i++) {
    hex = array[i].toString(16);
    if (hex.length === 1) {
      hex = '0' + hex;
    }
    result += hex;
  }
  return result;
};
