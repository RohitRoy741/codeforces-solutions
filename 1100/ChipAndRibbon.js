// Problem Link: https://codeforces.com/problemset/problem/1901/B
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
    const c = lines[i++].split(" ").map(Number);
    solve(n, c);
  }
});

function solve(n, c) {
  let prev = 1;
  let teleports = 0;
  for (let i = 0; i < n; i++) {
    teleports += Math.max(0, c[i] - prev);
    prev = c[i];
  }
  console.log(teleports);
}
