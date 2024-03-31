// Problem Link: https://codeforces.com/problemset/problem/1791/D
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
    const a = lines[i++];
    solve(n, a);
  }
});

function solve(n, a) {
  let left = [1];
  let set = new Set();
  set.add(a[0]);
  for (let i = 1; i < n; i++) {
    set.add(a[i]);
    left[i] = set.size;
  }
  set = new Set();
  set.add(a[n - 1]);
  let right = [1];
  for (let i = 1; i < n; i++) {
    set.add(a[n - i - 1]);
    right[i] = set.size;
  }
  right.reverse();
  let max = -Infinity;
  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, left[i] + right[i + 1]);
  }
  max = Math.max(max, left[n - 1], right[0]);
  console.log(max);
}
