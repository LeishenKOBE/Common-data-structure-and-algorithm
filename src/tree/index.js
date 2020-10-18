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

  insertNode(node, newNode) {
    if (node.value < newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  preOrderTraversal(handler) {
    this.preOrderTraversalNode(this.root, handler);
  }
  preOrderTraversalNode(node, handler) {
    if (node !== null) {
      handler(node.value);
      this.preOrderTraversalNode(node.left, handler);
      this.preOrderTraversalNode(node.right, handler);
    }
  }
  inOrderTraversal(handler) {
    this.inOrderTraversalNode(this.root, handler);
  }
  inOrderTraversalNode(node, handler) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, handler);
      handler(node.value);
      this.inOrderTraversalNode(node.right, handler);
    }
  }
  postOrderTraversal(handler) {
    this.postOrderTraversalNode(this.root, handler);
  }
  postOrderTraversalNode(node, handler) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, handler);
      this.postOrderTraversalNode(node.right, handler);
      handler(node.value);
    }
  }
  min() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }
  max() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }
    return node.value;
  }
  search(value) {
    let node = this.root;
    while (node !== null) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
