//Problem Link: https://codeforces.com/problemset/problem/1825/B
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
    const [m, n] = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(m, n, b);
  }
});

function solve(m, n, b) {
  b.sort((a, b) => a - b);
  //console.log(b);
  let max = b[m * n - 1];
  let secondMax = b[m * n - 2];
  let min = b[0];
  let secondMin = b[1];
  let ans = (Math.max(m, n) - 1) * Math.min(m, n) * (max - min);
  ans = ans + (Math.min(m, n) - 1) * Math.max(secondMax - min, max - secondMin);
  console.log(ans);
}
