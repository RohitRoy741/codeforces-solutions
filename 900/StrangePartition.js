// Problem Link: https://codeforces.com/problemset/problem/1471/A
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
    const [n, x] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, x, a);
  }
});

function solve(n, x, a) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max += Math.ceil(a[i] / x);
    sum += a[i];
  }
  console.log(Math.ceil(sum / x), max);
}
