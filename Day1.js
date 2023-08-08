// https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

///anonymous function

const createHelloWorld = () => {
  return function HelloWorld() {
    return "Hello World";
  };
};

const f = createHelloWorld();
f(42); // "Hello World"
