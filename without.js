function without(Array1, Array2) {
  let filteredArray = [];
  for (const element of Array1) {
    if (!Array2.includes(element)) {
      filteredArray.push(element);
    }
  }
  console.log(filteredArray);
};

module.exports = without;


