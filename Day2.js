// https://leetcode.com/problems/create-hello-world-function/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR

//function closure inner function can access n from  outer function;

const createCounter = (n) => {
  return () => {
    return n++; // HIDDEN STATE, you can also ++n to add and then return value
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

//make function loook more like object orientated programming
const createCounter2 = (n) => {
  let count = n;

  return () => {
    return count++;
  };
};

//lets translate this code into a class (ES6 supported)

class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return ++this.n; // prefix incrementing
  }
}

const counter3 = new Counter(10); //create an instance of the class
counter3.increment(); // 11;
