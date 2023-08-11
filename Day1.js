// https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

///anonymous function
// const createHelloWorld = function() {
//   return function
// }

// createHelloWorld is a higher order function you can call twice ()(), also uses arrow syntax
const createHelloWorld = () => {
  return function HelloWorld() {
    return "Hello World";
  };
};

const f = createHelloWorld();
f(42); // "Hello World"
console.log("hello");

//anonymous functions do not support function hoisting
//function closures: functions have access to variables outside their scope (closure is all about hidden state)
// Javascript used to not support classes and people used factory functions to work around that
// If you want to omit a return you can only do it with a single line function

// Spread operator
let a = [1, 2];
let b = [3, 4];
console.log([...a, ...b]);
