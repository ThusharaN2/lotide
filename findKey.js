//fcn should take in object & callback
//should scan object and return 1st key that callback returns as truthy
//if none found, return undefined

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  };
  return undefined
}

