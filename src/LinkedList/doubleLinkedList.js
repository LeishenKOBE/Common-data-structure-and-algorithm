class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(element) {
    const newNode = new Node(element);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  toString() {
    return this.backwardString();
  }
  forwardString() {
    let curNode = this.tail;
    let resultString = "";
    while (curNode) {
      resultString += curNode.data + " ";
      curNode = curNode.prev;
    }
    return resultString;
  }
  backwardString() {
    let curNode = this.head;
    let resultString = "";
    while (curNode) {
      resultString += curNode.data + " ";
      curNode = curNode.next;
    }
    return resultString;
  }
  insert(position, data) {
    if (position < 0 || position > this.length) {
      return;
    }
    let newNode = new Node(data);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (position === 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let index = 0;
        let curNode = this.head;
        while (index++ < position) {
          curNode = curNode.next;
        }
        newNode.prev = curNode.prev;
        newNode.next = curNode;
        curNode.prev.next = newNode;
        curNode.prev = newNode;
      }
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
      index += 1;
    }
    return -1;
  }
  update(position, data) {
    if (position < 0 || position >= this.length) {
      return;
    }
    let index = 0;
    let curNode = this.head;
    while (index++ < position) {
      curNode = curNode.next;
    }
    curNode.data = data;
  }
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        let curNode = this.head;
        while (index++ < position) {
          curNode = curNode.next;
        }
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
      }
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
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}
