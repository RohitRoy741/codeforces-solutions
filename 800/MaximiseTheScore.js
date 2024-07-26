// Problem Link: https://codeforces.com/problemset/problem/1930/A
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
  let score = 0;
  for (let i = 0; i < 2 * n; i += 2) {
    score += a[i];
  }
  console.log(score);
}
