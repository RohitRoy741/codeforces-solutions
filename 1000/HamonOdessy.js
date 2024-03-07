//Problem Link: https://codeforces.com/problemset/problem/1847/B
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
  let and = a[0];
  for (let i = 1; i < n; i++) {
    and &= a[i];
  }
  if (and !== 0) {
    console.log(1);
    return;
  }
  let currentAnd = a[0];
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (currentAnd === -1) {
      currentAnd = a[i];
    } else {
      currentAnd &= a[i];
    }
    if (currentAnd === and) {
      total++;
      currentAnd = -1;
    }
  }
  console.log(total);
}
