const middle = function(array) {
  if (array.length === 1 || array.length === 2)  {
    console.log([]);
  } else {
    let mid1 = Math.floor((array.length + 1) / 2);
    let mid2 = Math.ceil((array.length + 1) / 2);
    console.log(array.slice(mid1 - 1, mid2));
  }
};

module.exports = middle;
