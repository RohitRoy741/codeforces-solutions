// Problem Link: https://codeforces.com/problemset/problem/1863/B
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
    const p = lines[i++].split(" ").map(Number);
    solve(n, p);
  }
});

function solve(n, p) {
  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(p[i], i);
  }
  //console.log(map);
  let prev = -Infinity;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (map.get(i) < prev) {
      total++;
    }
    prev = map.get(i);
  }
  console.log(total);
}
