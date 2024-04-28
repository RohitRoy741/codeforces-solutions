// Problem Link: https://codeforces.com/problemset/problem/1579/E1

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  unshift(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr.join(" "));
  }
}

let input = "";
process.stdin.on("data", (data) => (input += data));
process.stdin.on("end", () => {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const t = +lines[0];
  let i = 1;
  while (i < lines.length) {
    const n = +lines[i++];
    const p = lines[i++].split(" ").map(Number);
    solve(n, p);
  }
});
function solve(n, p) {
  const dequeue = new LinkedList();
  dequeue.push(p[0]);
  for (let i = 1; i < n; i++) {
    if (p[i] < dequeue.head.data) {
      dequeue.unshift(p[i]);
    } else {
      dequeue.push(p[i]);
    }
  }
  dequeue.print();
}
