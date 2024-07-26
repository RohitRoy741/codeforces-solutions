// Problem Link: https://codeforces.com/problemset/problem/1976/B
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
  let target = b[n];
  let minDiff = Infinity;
  let operations = 0;
  for (let i = 0; i < n; i++) {
    let min = Math.min(a[i], b[i]);
    let max = Math.max(a[i], b[i]);
    if (target >= min && target <= max) {
      minDiff = 0;
    }
    minDiff = Math.min(
      minDiff,
      Math.abs(target - a[i]),
      Math.abs(target - b[i])
    );
    operations += Math.abs(a[i] - b[i]);
  }
  operations += minDiff + 1;
  console.log(operations);
}
