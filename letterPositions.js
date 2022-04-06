
const letterPositions = function(sentence) {
  const results = {}
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
};

letterPositions("lighthouse in the house");