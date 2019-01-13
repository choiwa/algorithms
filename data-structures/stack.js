class Stack {
  constructor() {
    this._storage = {};
    this.count = 0;
  }

  push(value) {
    this._storage[this.count] = value;
    this.count += 1;
  }

  pop() {
    if (this.count === 0) {
      this.count = 0;
    } else {
      this.count -= 1;
    }

    delete this._storage[this.count];
  }

  peek() {
    return this._storage[this.count - 1];
  }
}

let myStack = new Stack();
console.log("beginning myStack", myStack);
myStack.push("hello");
console.log(myStack.peek());
myStack.push("world");
myStack.pop();
console.log("final", myStack);
myStack.pop();
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
