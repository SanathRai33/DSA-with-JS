class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(ele) {
    this.top++;
    this.stack[this.top] = ele;
    // this.stack.push(ele)
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    const removed = this.stack.pop();
    this.top--;
    return removed;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    return this.stack[this.top];
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }
}


// Creation of object by using the Stack class

let st1 = new Stack();

console.log("Empty:", st1.isEmpty());

st1.push(10);
st1.push(5);
st1.push(6);
st1.push(8);

console.log("Stack:", st1.stack);
console.log("Peek:", st1.peek());

console.log("Removed:", st1.pop());
console.log("Removed:", st1.pop());

st1.push(7);
st1.push(3);
st1.push(5);

console.log("Stack:", st1.stack);
console.log("Size:", st1.size());