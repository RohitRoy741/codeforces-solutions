// Problem Link: https://codeforces.com/problemset/problem/1979/A
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
  let min = Infinity;
  for (let i = 0; i < n - 1; i++) {
    let currentMax = Math.max(a[i], a[i + 1]);
    min = Math.min(min, currentMax);
  }
  console.log(min - 1);
}
