// Problem Link: https://codeforces.com/contest/1944/problem/B
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, a);
  }
});

function solve(n, k, a) {
  let x = a.slice(0, n);
  let y = a.slice(n, 2 * n);
  //console.log(n, x, y);
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < n; i++) {
    map1.set(x[i], (map1.get(x[i]) || 0) + 1);
    map2.set(y[i], (map2.get(y[i]) || 0) + 1);
  }
  let l = [];
  let r = [];
  map1 = Array.from(map1.entries()).sort((a, b) => b[1] - a[1]);
  map2 = Array.from(map2.entries()).sort((a, b) => b[1] - a[1]);
  let i = 0;
  k = k * 2;
  while (k > 0) {
    if (map1[i][1] === 2) {
      l.push(map1[i][0]);
      l.push(map1[i][0]);
      r.push(map2[i][0]);
      r.push(map2[i][0]);
      k -= 2;
    } else {
      l.push(map1[i][0]);
      r.push(map1[i][0]);
      k--;
    }
    i++;
  }
  console.log(l.join(" "));
  console.log(r.join(" "));
}
