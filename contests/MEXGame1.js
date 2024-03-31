//Problem Link: https://codeforces.com/contest/1944/problem/C
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
  let max = Math.max(...a);
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    map.set(a[i], (map.get(a[i]) || 0) + 1);
  }
  //console.log(map);
  for (let i = 0; i <= max; i++) {
    if (!map.has(i) || map.get(i) <= i) {
      console.log(i);
      return;
    }
  }
  console.log(max + 1);
}
