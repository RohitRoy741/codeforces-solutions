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
  let root = Array.from(map.entries()).sort(
    (a, b) => b[1].length - a[1].length
  )[0];
  //console.log("Root:", root);
  let extras = Math.max(0, root[1].length - 2);
  let queue = [...root[1]];
  let seen = new Set([root[0]]);
  //console.log(extras, queue);
  while (queue.length > 0) {
    //console.log(queue);
    let node = queue.shift();
    seen.add(node);
    let localExtra = 0;
    let children = map.get(node);
    for (let child of children) {
      if (!seen.has(child)) {
        queue.push(child);
        localExtra++;
      }
    }
    extras += Math.max(0, localExtra - 1);
  }
  //console.log(queue);
  console.log(Math.ceil(extras / 2) + 1);
}
