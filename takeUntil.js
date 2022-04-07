//two parameters: array to work with & callback(aka predicate in lodash)
//return a slice of an array w/ elements taken from the beginning
// it stops when callback returns truthy value

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let item of array) {
    if (!callback(item)) {
      newArray.push(item);
    } else {
      return newArray;
    }
  }
  return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//expected output
//[ 1, 2, 5, 7, 2 ]
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]