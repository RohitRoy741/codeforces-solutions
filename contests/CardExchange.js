// Problem Link: https://codeforces.com/contest/1966/problem/0
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
  let freq = new Map();
  for (let i = 0; i < n; i++) {
    if (freq.has(a[i])) {
      freq.set(a[i], freq.get(a[i]) + 1);
    } else {
      freq.set(a[i], 1);
    }
  }
  for (let [key, v] of freq.entries()) {
    if (v >= k) {
      console.log(k - 1);
      return;
    }
  }
  console.log(n);
}
