const eqArrays = require('./eqArrays');


function assertArraysEqual(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertation Passed: ${Array1} === ${Array2}`);
  } else {
    console.log(`Assertaion Failed: ${Array1} !== ${Array2}`);
  }
};

module.exports = assertArraysEqual

