// Problem Link: https://codeforces.com/problemset/problem/1584/C
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
    const b = lines[i++].split(" ").map(Number);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (a[i] === b[i] || b[i] - a[i] === 1) {
      continue;
    } else {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
