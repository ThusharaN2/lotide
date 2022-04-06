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

const assertArraysEqual = function(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertation Passed: ${Array1} === ${Array2}`);
  } else {
    console.log(`Assertaion Failed: ${Array1} !== ${Array2}`);
  }
};


const middle = function(array) {
  if (array.length === 1 || array.length === 2)  {
    console.log([]);
  } else {
    let mid1 = Math.floor((array.length + 1) / 2);
    let mid2 = Math.ceil((array.length + 1) / 2);
    console.log(array.slice(mid1 - 1, mid2));
  }
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
