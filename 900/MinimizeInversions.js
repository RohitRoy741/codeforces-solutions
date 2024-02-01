// Problem Link: https://codeforces.com/problemset/problem/1918/B
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
  let x = Array(n).fill(0);
  let y = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    pos1 = a[i] - 1;
    pos2 = b[i] - 1;
    if (x[pos1] === 0) {
      x[pos1] = a[i];
      y[pos1] = b[i];
    } else {
      x[pos2] = a[i];
      y[pos2] = b[i];
    }
  }
  console.log(x.join(" "));
  console.log(y.join(" "));
}
