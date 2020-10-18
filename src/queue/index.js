class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  // 查看队列元素
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
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

// 击鼓传花
const passGame = (nameList, num) => {
  const queue = new Queue();
  for (let i = 0; i < nameList.length; i += 1) {
    queue.enqueue(nameList[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i += 1) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  console.log(queue.front());
};

const arr = ["Lily", "Lucy", "Tom", "LiLei", "Why"];
passGame(arr, 3);
