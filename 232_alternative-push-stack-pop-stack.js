// 232. Implement Queue using Stacks - Push Stack Pop Stack

var MyQueue = function () {
  this.pushStack = new MyStack();
  this.popStack = new MyStack();
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.popStack.getSize() === 0) {
    while (this.pushStack.getSize() > 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.popStack.getSize() === 0) {
    while (this.pushStack.getSize() > 0) {
      this.popStack.push(this.pushStack.pop());
    }
  }
  return this.popStack.peek();
};
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.pushStack.empty() && this.popStack.empty() ? true : false;
};

class MyStack {
  constructor() {
    this.stack = {};
    this.size = 0;
  }

  push(value) {
    this.stack[this.size] = value;
    this.size++;
  }
  pop() {
    this.size--;
    const popped = this.stack[this.size];
    delete this.stack[this.size];
    return popped;
  }
  peek() {
    return this.stack[this.size - 1];
  }
  getSize() {
    return this.size;
  }
  empty() {
    return this.size === 0;
  }
}

let test = new MyStack();
test.push(1);
test.push(2);
test.push(3);
test.peek();

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
