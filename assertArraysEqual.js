//let eqArrays = function(Array1, Array2) {
 // for (let i = 0; i < Array1.length; i++) {
 //   for (let j = i; j < Array2.length; j++) {
 //     if (Array1[i] !== Array2[j]) {
 //       return false;
 //     } else {
//        return true;
 //     }
 //   }
 // }
//};

function assertArraysEqual(Array1, Array2) {
  if (eqArrays(Array1, Array2)) {
    console.log(`Assertation Passed: ${Array1} === ${Array2}`);
  } else {
    console.log(`Assertaion Failed: ${Array1} !== ${Array2}`);
  }
};
