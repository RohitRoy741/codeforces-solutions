// Problem Link: https://codeforces.com/problemset/problem/1671/B
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
  if (n === 1) {
    console.log("YES");
    return;
  }
  let left = a[0] + 1;
  let right = a[n - 1] - 1;
  let required = right - left - 1;
  let available = n - 2;
  if (available >= required) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
