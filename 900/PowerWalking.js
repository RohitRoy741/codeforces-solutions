// Problem Link: https://codeforces.com/problemset/problem/1642/B
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
  const uniques = new Set(a);
  const u = uniques.size;
  let ans = "";
  for (let k = 1; k <= n; k++) {
    ans += Math.max(u, k) + " ";
  }
  console.log(ans);
}
