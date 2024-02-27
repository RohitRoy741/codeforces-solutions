//Problem Link: https://codeforces.com/problemset/problem/1879/B
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
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  const minA = a[0];
  const minB = b[0];
  const sum1 = a.reduce((acc, val) => acc + val + minB, 0);
  const sum2 = b.reduce((acc, val) => acc + val + minA, 0);
  console.log(Math.min(sum1, sum2));
}
