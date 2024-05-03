// Problem Link: https://codeforces.com/problemset/problem/1905/B
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
    const edges = [];
    for (let j = 0; j < n - 1; j++) {
      let [u, v] = lines[i++].split(" ").map(Number);
      edges.push([u, v]);
    }
    console.log(n, edges);
    solve(n, edges);
  }
});

function solve(n, edges) {
  let map = new Map();
  for (let i = 0; i < n - 1; i++) {
    let [u, v] = edges[i];
    if (!map.has(u)) {
      map.set(u, [v]);
    } else {
      map.get(u).push(v);
    }
    if (!map.has(v)) {
      map.set(v, [u]);
    } else {
      map.get(v).push(u);
    }
  }
  console.log(map);
  let extras = 0;
  for (let [key, value] of map) {
    extras += value.length - 1;
  }
  extras -= 2;
  console.log(Math.ceil(extras / 2) / 2 + 1);
}
