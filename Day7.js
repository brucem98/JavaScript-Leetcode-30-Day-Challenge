// https://leetcode.com/problems/function-composition/

//imperatively

const fn1 = (x) => x + 1;
const fn2 = (x) => 2 * x;

console.log(fn1(fn2(4))); //9

//imperatively
const compose = function (functions) {
  return function (x) {
    for (const fn of functions.reverse()) {
      //iterate through the reverse array
      x = fn(x); //accumulate/aggregate the result in x
    }
    return x;
  };
};

//declarative solution
const compose2 = function (functions) {
  const fn = (acc, f) => f(acc);
  return function (x) {
    return functions.reduceRight(fn, x);
  };
};

const fn = compose2([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
