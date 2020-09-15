const data = [
  {
    name: "a",
    children: [
      { name: "b", children: [{ name: "e" }] },
      { name: "c", children: [{ name: "f" }] },
      { name: "d", children: [{ name: "g" }] },
    ],
  },
  {
    name: "a2",
    children: [
      { name: "b2", children: [{ name: "e2" }] },
      { name: "c2", children: [{ name: "f2" }] },
      { name: "d2", children: [{ name: "g2" }] },
    ],
  },
];
let nodes = [];
const deepTraversal = (node) => {
  if (node != null) {
    nodes.push(node);
    let children = node.children;
    for (let i = 0; i < children.length; i += 1) {
      deepTraversal(children[i]);
    }
  }
};
for (let i = 0; i < data.length; i += 1) {
  deepTraversal(data[i]);
}

console.log(nodes);
