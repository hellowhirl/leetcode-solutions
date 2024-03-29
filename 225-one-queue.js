// 225. Implement Stack using Queues - One Queue

var MyStack = function () {
  this.primaryQueue = new MyQueue();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  const rotations = this.primaryQueue.size();

  this.primaryQueue.enqueue(x);

  // rotate newly added number to back of the queue, or the top of our simulated stack
  // keep in mind i = 0, and rotations will be 1 less than actual size
  for (let i = 0; i < rotations; i++) {
    this.primaryQueue.enqueue(this.primaryQueue.dequeue());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.primaryQueue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.primaryQueue.peek();
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.primaryQueue.isEmpty();
};

class MyQueue {
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0; // represents the index of the next element that will be added
  }

  peek() {
    return this.storage[this.first];
  }

  size() {
    return this.last - this.first;
  }

  isEmpty() {
    // return this.first === this.last;
    // or
    return this.size() === 0;
  }

  enqueue(val) {
    this.storage[this.last] = val;
    this.last++; // increment the last value to be ready for the next element that would be added
  }

  dequeue() {
    if (!this.isEmpty()) {
      const firstItem = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return firstItem;
    }
    return null; // a guard for when we have no elements in our queue
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
