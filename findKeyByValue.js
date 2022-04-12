const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  for (let [i] of keysArray) {
    if (object[i] === value) return [i];
  }
};
 
module.exports = findKeyByValue;
