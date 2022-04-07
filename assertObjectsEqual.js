const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key].length !== object2[key].length) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (!object1[key] === object2[key]) {
      return false;
    }
  }
  return true;
};

let eqArrays = function(Array1, Array2) {
  for (let i = 0; i < Array1.length; i++) {
    for (let j = i; j < Array2.length; j++) {
      if (Array1[i] !== Array2[j]) {
        return false;
      } else {
        return true;
      }
    }
  }
};


const assertObjectsEqual = function(actual, expected) {
   const inspect = require('util').inspect;
   eqObjects(actual,expected) ? console.log(`😃😃😃 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
   : console.log(`😩😩😩 Assertion Failed: ${actual} !== ${expected}`);
};

