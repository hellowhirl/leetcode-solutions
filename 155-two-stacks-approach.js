// 155. Min Stack - using 2 stacks

var MinStack = function () {
  this.mainStack = new MyStack();
  this.minStack = new MyStack();
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.mainStack.push(val);

  if (this.minStack.isEmpty()) {
    this.minStack.push(val);
  } else if (val <= this.minStack.peek()) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.minStack.peek() === this.mainStack.peek()) {
    this.minStack.pop();
  }

  this.mainStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.mainStack.peek();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack.peek();
};

class MyStack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(val) {
    this.stack[this.size] = val;
    this.size++;
  }

  pop() {
    this.size--;
    delete this.stack[this.size];
  }

  peek() {
    return this.stack[this.size - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

// const test = new MyStack();
// test.push(1);
// test.push(2);
// test.push(3);

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
