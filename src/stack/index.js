// 栈
class Stack {
  constructor() {
    this.items = [];
  }

  // 压栈
  push(item) {
    this.items.push(item);
  }

  // 出栈
  pop() {
    return this.items.pop();
  }
  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  // 判断是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 获取栈元素个数
  size() {
    return this.items.length;
  }

  toString() {
    let resultString = "";
    for (let i = 0; i < this.items.length; i += 1) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  }
}
