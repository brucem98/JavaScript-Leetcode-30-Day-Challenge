// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

// Functional programming - No state, no variables

const map = function (arr, fn) {
  return arr.map(fn);
};

// Procedural programming

const map2 = function (arr, fn) {
  const res = [];
  for (const i in arr) {
    // in = index of array, of = every value of aray
    res.push(fn(arr[i], Number(i))); // instance is saved as string and function expects an integer
  }
  return res;
};

console.log(
  map2([1, 2, 3], function plusone(n, i) {
    return n + i;
  })
);

// The strategy design pattern: we are given to flexibility to modify the behavior of this function without changing a single line of code
// Open-Closed Principle instace: closed to change but open for extension (by just passing in a different function)
