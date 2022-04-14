const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ["Lighthouse", "Labs] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(testArr.length, 3);
  });

  it("returns ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs",
    ]);
  });
});
