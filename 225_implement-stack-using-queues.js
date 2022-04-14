// 225. Implement Stack using Queues

var MyStack = function () {
  this.firstQueue = [];
  this.secondQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.secondQueue.push(x);
  while (this.secondQueue.length > 0) {
    this.firstQueue.push(this.secondQueue.pop());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.firstQueue.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.firstQueue[this.firstQueue.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.firstQueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const prompt = `
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 `;
