// Problem Link: https://codeforces.com/problemset/problem/1831/B
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
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  let maxLengthA = new Map();
  let maxLengthB = new Map();
  let i = 0;
  while (i < n) {
    let element = a[i];
    let count = 0;
    while (i < n && a[i] === element) {
      count++;
      i++;
    }
    if (maxLengthA.has(element)) {
      maxLengthA.set(element, Math.max(maxLengthA.get(element), count));
    } else {
      maxLengthA.set(element, count);
    }
  }
  //   console.log(maxLengthA);
  i = 0;
  while (i < n) {
    let element = b[i];
    let count = 0;
    while (i < n && b[i] === element) {
      i++;
      count++;
    }
    if (maxLengthB.has(element)) {
      maxLengthB.set(element, Math.max(maxLengthB.get(element), count));
    } else {
      maxLengthB.set(element, count);
    }
  }
  //   console.log(maxLengthB);
  let result = -Infinity;
  for (let [key, value] of maxLengthA) {
    let total = value + (maxLengthB.get(key) || 0);
    result = Math.max(result, total);
  }
  for (let [key, value] of maxLengthB) {
    let total = value + (maxLengthA.get(key) || 0);
    result = Math.max(result, total);
  }
  console.log(result);
}
