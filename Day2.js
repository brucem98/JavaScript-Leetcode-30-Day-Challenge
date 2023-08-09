// https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

const createCounter = (n) => {
  return () => {
    return n++; // HIDDEN STATE
  };
};

const counter = createCounter(10);
// counter() // 10
// counter() // 11
// counter() // 12
