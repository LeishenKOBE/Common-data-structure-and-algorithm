class MySet {
  constructor() {
    this.items = {};
  }

  add(value) {
    if (this.has(value)) {
      return;
    }
    this.items[value] = value;
    return true;
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  remove(value) {
    if (!this.has(value)) {
      return;
    }
    delete this.items[value];
    return true;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  values() {
    return Object.keys(this.items);
  }
}
