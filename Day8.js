// https://leetcode.com/problems/allow-one-function-call/

const once = function (fn) {
  let called = false;

  return function (...args) {
    //Pass an arbitrary amount of numbers and access them as if they are an array
    if (called) {
      return undefined;
    }
    called = true;
    return fn(...args); //fn(args) args would be passed as an array instead of seperate elements
  };
};

//Higher order function
