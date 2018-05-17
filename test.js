'use strict';

var expect = require('chai').expect;
var arrayToHex = require('./index');

describe('arrayToHex function should convert an array of integers into a hexadecimal string', function() {
  it('should return a hex string if all array elements are integers', function() {
    expect(arrayToHex([1, 2, 3, 4], Array)).to.equal('01020304');

    var chirpPayload = arrayToHex(new Uint8Array([5, 6, 7, 8]), Uint8Array);
    expect(chirpPayload).to.equal('05060708');
  });
  it('An array with its right types must be provided else it will return an empty string', function() {
    expect(arrayToHex(new Uint8Array([], Uint8Array))).to.equal('');
    expect(
      arrayToHex(new Uint8Array(['a', 'b', 'c', 'd'], Uint8Array))
    ).to.equal('');
    expect(arrayToHex('', Uint8Array)).to.equal('');
    expect(arrayToHex(1, Uint8Array)).to.equal('');
    expect(arrayToHex({}, Uint8Array)).to.equal('');
  });
});
