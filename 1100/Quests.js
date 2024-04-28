// Problem Link: https://codeforces.com/problemset/problem/1914/C
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, k, a, b);
  }
});

function solve(n, k, a, b) {
  let sum = [a[0]];
  for (let i = 1; i < n; i++) {
    sum.push(sum[i - 1] + a[i]);
  }
  let max = [b[0]];
  for (let i = 1; i < n; i++) {
    max.push(Math.max(max[i - 1], b[i]));
  }
  let result = -Infinity;
  for (let i = 0; i < k && i < n; i++) {
    let straight = sum[i];
    let remaining = k - i - 1;
    let repeated = max[i] * remaining;
    let total = straight + repeated;
    result = Math.max(result, total);
  }
  console.log(result);
}
