// https://leetcode.com/problems/counter-ii/

const createCounter = (init) => {
  let count = init;

  const increment = () => ++count;

  const decrement = () => {
    return --count;
  };

  function reset() {
    count = init; // init is our hidden state
    return count;
  }

  return {
    increment: increment, // increment,
    decrement: decrement, // decrement,
    reset: reset, // reset (you can ommit if the key and the value have the same name as a shortcut)
  };
};

const counter = createCounter(5);
console.log(
  counter.increment(), // 6
  counter.reset(), // 5
  counter.decrement() // 4
);

// Solve problem by creating a Class

class Counter {
  constructor(init) {
    this.init = init;
    this.count = init; //we need to define the count because this will go out of scope
  }

  increment() {
    //don't need function keyword
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }

  reset() {
    this.count = this.init;
    return this.count;
  }
}
