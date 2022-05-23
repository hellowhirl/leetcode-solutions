// 232. Implement Queue using Stacks

var MyQueue = function () {
  this.primary = new MyStack();
  this.secondary = new MyStack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.primary.size() > 0) {
    this.secondary.push(this.primary.pop());
  }

  this.secondary.push(x);

  while (this.secondary.size() > 0) {
    this.primary.push(this.secondary.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.primary.size > 1) {
    this.secondary.push(this.primary.pop());
  }
  const popped = this.primary.pop();

  while (this.secondary.size() > 0) {
    this.primary.push(this.secondary.pop());
  }
  return popped;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.primary.peek();
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.primary.empty();
};

class MyStack {
  constructor() {
    this.stack = {};
    this.first = 0;
  }

  push(value) {
    this.stack[this.first] = value;
    this.first++;
  }
  pop() {
    this.first--;
    const popped = this.stack[this.first];
    delete this.stack[this.first];
    return popped;
  }
  peek() {
    return this.stack[this.first - 1];
  }
  size() {
    return this.first;
  }
  empty() {
    return this.first === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
