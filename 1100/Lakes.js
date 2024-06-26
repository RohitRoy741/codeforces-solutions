// Problem Link: https://codeforces.com/problemset/problem/1829/E

class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  front;
  rear;

  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  push(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }
    let node = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return node.data;
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
    const [n, m] = lines[i++].split(" ").map(Number);
    const grid = lines
      .slice(i, i + n)
      .map((line) => line.split(" ").map(Number));
    i += n;
    solve(n, m, grid);
  }
});

function solve(n, m, grid) {
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] < 1) {
        continue;
      }
      let sum = dfs(grid, i, j);
      max = max < sum ? sum : max;
    }
  }
  console.log(max);
}

function dfs(grid, i, j) {
  let sum = 0;
  let queue = new Queue();
  queue.push({ row: i, col: j });
  while (!queue.isEmpty()) {
    let element = queue.shift();
    sum += grid[element.row][element.col];
    grid[element.row][element.col] = 0;
    if (grid[element.row + 1] && grid[element.row + 1][element.col]) {
      queue.push({ row: element.row + 1, col: element.col });
    }
    if (grid[element.row - 1] && grid[element.row - 1][element.col]) {
      queue.push({ row: element.row - 1, col: element.col });
    }
    if (grid[element.row][element.col + 1]) {
      queue.push({ row: element.row, col: element.col + 1 });
    }
    if (grid[element.row][element.col - 1]) {
      queue.push({ row: element.row, col: element.col - 1 });
    }
  }
  return sum;
}
