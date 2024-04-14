// Problem Link: https://codeforces.com/problemset/problem/1691/B
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
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(a[i])) {
      map.get(a[i]).push(i);
    } else {
      map.set(a[i], [i]);
    }
  }
  //console.log(map);
  for (let indexes of map.values()) {
    if (indexes.length === 1) {
      console.log("-1");
      return;
    }
  }
  for (let key of map.keys()) {
    map.set(key, { indexes: map.get(key), curr: 1 });
  }
  let results = [];
  for (let i = 0; i < n; i++) {
    let key = a[i];
    let { indexes, curr } = map.get(key);
    results.push(indexes[curr] + 1);
    map.set(key, { indexes, curr: (curr + 1) % indexes.length });
  }
  console.log(results.join(" "));
}
