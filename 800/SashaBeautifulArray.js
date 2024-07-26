// Problem Link: https://codeforces.com/problemset/problem/1929/A
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
    solve(n, a);
  }
});

function solve(n, a) {
  a.sort((x, y) => x - y);
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += a[i] - a[i - 1];
  }
  console.log(total);
}
