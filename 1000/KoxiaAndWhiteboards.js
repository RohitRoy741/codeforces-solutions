// Problem Link: https://codeforces.com/problemset/problem/1770/A
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
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, m, a, b);
  }
});

function solve(n, m, a, b) {
  let index = minIndex(a);
  let whiteboards = [];
  for (let i = 0; i < n; i++) {
    if (i !== index) {
      whiteboards.push(a[i]);
    }
  }
  whiteboards = whiteboards.concat(b);
  whiteboards.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += whiteboards[i];
  }
  console.log(whiteboards);
  console.log(sum);
}

function minIndex(a) {
  let min = a[0];
  let minIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < min) {
      min = a[i];
      minIndex = i;
    }
  }
  return minIndex;
}
