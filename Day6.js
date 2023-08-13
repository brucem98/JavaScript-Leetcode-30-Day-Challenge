// https://leetcode.com/problems/array-reduce-transformation/

// reducing is about aggregation, we have a bunch of values and we want
// to reduce them to a single value.

// functional programming: we dont have to manage our own state
// const nums = [1, 2, 7, 4, 5];

// function fn(init, n) {
//   return init + n;
// }

// console.log(nums.reduce(fn, 0));

// functional programming
const reduce = function (nums, fn, init) {
  return nums.reduce(fn, init);
};

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(init, n) {
      return init + n;
    },
    0
  )
);

//For loop solution you could also imperatively iterate with an index you explicitly increment

const reduce2 = function (nums, fn, init) {
  let res = init; //result is going to be whatever the initial value ends up being after aggregation

  for (const n of nums) {
    res = fn(res, n); // u pass in the res because you dont want to keep using 0(init)
  }

  return res;
};

console.log(
  reduce2(
    [1, 2, 3, 4],
    function sum(init, n) {
      return init + n;
    },
    0
  )
);

//For-each solution, iterative method

const reduce3 = function (nums, fn, init) {
  let res = init; //result is going to be whatever the initial value ends up being after aggregation

  nums.forEach((n) => {
    res = fn(res, n);
  });

  return res;
};

console.log(
  reduce3(
    [1, 2, 3, 4],
    function sum(init, n) {
      return init + n;
    },
    0
  )
);
