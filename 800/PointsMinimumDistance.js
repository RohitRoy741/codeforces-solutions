//Problem Link: https://codeforces.com/problemset/problem/1895/B
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
    const arr = lines[i++].split(" ").map(Number);
    solve(n, arr);
  }
});

function solve(n, arr) {
  arr.sort((a, b) => a - b);
  let x = arr.slice(0, n);
  let y = arr.slice(n, 2 * n);
  let distance = 0;
  for (let i = 1; i < n; i++) {
    distance += Math.abs(x[i] - x[i - 1]) + Math.abs(y[i] - y[i - 1]);
  }
  console.log(distance);
  for (let i = 0; i < n; i++) {
    console.log(x[i], y[i]);
  }
}
