// Problem Link: https://codeforces.com/problemset/problem/1613/B
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
  let required = Math.floor(n / 2);
  a.sort((a, b) => b - a);
  let y = a[n - 1];
  let pairs = [];
  for (let i = 0; i < required; i++) {
    pairs.push([a[i], y]);
  }
  for (let pair of pairs) {
    console.log(pair.join(" "));
  }
}
