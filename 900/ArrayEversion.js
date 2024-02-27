// Problem Link: https://codeforces.com/problemset/problem/1585/B
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
  let max = -Infinity;
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (a[i] > max) {
      max = a[i];
      count++;
    }
  }
  console.log(count - 1);
}
