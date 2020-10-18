class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curNode = this.head;
      while (curNode.next !== null) {
        curNode = curNode.next;
      }
      curNode.next = newNode;
    }
    this.length += 1;
  }
  toString() {
    let curNode = this.head;
    let listString = "";
    while (curNode) {
      listString += curNode.data + " ";
      curNode = curNode.next;
    }
    return listString;
  }
  insert(position, data) {
    // 对position进行越界判断
    if (position < 0 || position > this.length) {
      return;
    }
    let newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let curNode = this.head;
      let prevNode = null;
      while (index++ < position) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      newNode.next = curNode;
      prevNode.next = newNode;
    }
    this.length += 1;
    return true;
  }
  get(position) {
    if (position < 0 || position >= this.length) {
      return;
    }
    let curNode = this.head;
    let index = 0;
    while (index++ < position) {
      curNode = curNode.next;
    }
    return curNode.data;
  }
  indexOf(data) {
    let index = 0;
    let curNode = this.head;
    while (curNode) {
      if (curNode.data === data) {
        return index;
      }
      curNode = curNode.next;
      index++;
    }
    return -1;
  }
  update(position, data) {
    if (position < 0 || position >= this.length) {
      return;
    }
    let curNode = this.head;
    let index = 0;
    while (index++ < position) {
      curNode = curNode.next;
    }
    curNode.data = data;
    return true;
  }
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
    } else {
      let index = 0;
      let curNode = this.head;
      let prevNode = null;
      while (index++ < position) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      prevNode.next = curNode.next;
    }
    this.length -= 1;
    return true;
  }
  remove(data) {
    let index = this.indexOf(data);
    this.removeAt(index);
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
}

let list = new LinkedList();
list.append("abc");
list.append("cba");
list.append("shidongzhao");
list.append("xusong");
list.append("zhoujielun");
console.log(list.toString());
