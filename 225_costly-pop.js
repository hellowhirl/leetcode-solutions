// 225. Implement Stack using Queues - using Costly Pop
// remove every element from the main queue, except for one
// for the elements we remove we're going to add to the secondary queue
// then swap the main and secondary queues

var MyStack = function () {
  this.mainQueue = new QueueDude();
  this.secondaryQueue = new QueueDude();
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.mainQueue.enqueue(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.mainQueue.size() > 1) {
    this.secondaryQueue.enqueue(this.mainQueue.dequeue());
  }
  const bottomReference = this.mainQueue.dequeue();

  while (this.secondaryQueue.size() > 0) {
    this.mainQueue.enqueue(this.secondaryQueue.dequeue());
  }

  return bottomReference;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.mainQueue.size() > 1) {
    this.secondaryQueue.enqueue(this.mainQueue.dequeue());
  }
  const bottomReference = this.mainQueue.dequeue();
  this.secondaryQueue.enqueue(bottomReference);

  while (this.secondaryQueue.size() > 0) {
    this.mainQueue.enqueue(this.secondaryQueue.dequeue());
  }

  return bottomReference;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.mainQueue.isEmpty();
};

class QueueDude {
  constructor() {
    this.store = {};
    this.first = 0;
    this.last = 0;
  }

  peek() {
    return this.store[this.last];
  }

  size() {
    return this.last - this.first;
  }

  isEmpty() {
    return this.first === this.last;
  }

  enqueue(val) {
    this.store[this.last] = val;
    this.last++;
  }

  dequeue() {
    const first = this.store[this.first];
    delete this.store[this.first];
    this.first++; // removed first value, so we must move position of first marker up by 1
    return first;
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
