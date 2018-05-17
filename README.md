# array-to-hex
---

Converts an array of Integers into a hexadecimal string.

## Installation

`npm install array-to-hex`

## Usage

```javascript
// it accepts the array along with its type, to know more about typed arrays please visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
var hexString = arrayToHex([1, 2, 3, 4], Array);
  
console.log(hexString);
// hexString = '01020304'
  
// in Chirp we only accept type: Uint8Array, so you should format your payload in the following way:
var chirpPayload = arrayToHex(new Uint8Array([5, 6, 7, 8]), Uint8Array);
  
console.log(chirpPayload);
// chirpPayload = '05060708'
```

## Tests

`npm run test`
