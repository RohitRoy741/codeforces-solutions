// Problem Link: https://codeforces.com/problemset/problem/1800/C2

class MaxHeap {
  heap;

  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex < 0) return;
    if (this.heap[parentIndex] < this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let largest = index;
    if (this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }
    if (this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }
    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
      this.bubbleDown(largest);
    }
  }

  print() {
    console.log(this.heap);
  }

  extractMax() {
    if (!this.heap.length) return 0;
    if (this.heap.length === 1) return this.heap.pop();
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
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
    const cards = lines[i++].split(" ").map(Number);
    solve(n, cards);
  }
});

function solve(n, cards) {
  let heap = new MaxHeap();
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (cards[i] > 0) {
      heap.insert(cards[i]);
    } else {
      let power = heap.extractMax();
      result += power;
    }
  }
  console.log(result);
}
