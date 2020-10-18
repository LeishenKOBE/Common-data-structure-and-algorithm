class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(node) {
    let newNode = new TreeNode(node);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(newNode);
    }
  }

  insertNode(node) {}
}
