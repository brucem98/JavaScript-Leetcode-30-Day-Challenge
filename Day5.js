// https://leetcode.com/problems/filter-elements-from-array/

const filter = function (arr, fn) {
  // declarative programming
  return arr.filter(fn);
};

const filter2 = function (arr, fn) {
  // imperative programming
  const res = [];

  //   for (const i in arr) use for loop so we dont have to convert i string to number (error prone)
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(
  filter2([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
