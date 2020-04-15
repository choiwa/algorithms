class Queue {
  constructor() {
    this._storage = {};
    // to keep this constant time
    this.head = 0;
    this.length = 0;
  }

  enqueue(value) {
    this._storage[this.length + this.head] = value;
    this.length += 1;
  }

  dequeue() {
    this.length -= 1;
    delete this._storage[this.head];
    this.head += 1;
  }

  peek() {}
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue._storage);
myQueue.dequeue();
console.log(myQueue._storage);
myQueue.enqueue(4);
console.log(myQueue._storage);
myQueue.dequeue();
console.log(myQueue._storage);
