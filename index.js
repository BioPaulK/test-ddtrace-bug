const mock = require('office-addin-mock');

function sum(a, b) {
  return a + b;
}
module.exports = sum;
console.log("will never reach this point");
