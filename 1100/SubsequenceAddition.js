// Problem Link: https://codeforces.com/problemset/problem/1807/G2
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
  a.sort((a, b) => a - b);
  let sum = 1;
  if (a[0] !== 1) {
    console.log("NO");
    return;
  }
  for (let i = 1; i < n; i++) {
    if (a[i] > sum) {
      console.log("NO");
      return;
    }
    sum += a[i];
  }
  console.log("YES");
}
