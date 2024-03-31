// Problem Link: https://codeforces.com/problemset/problem/1765/M
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
    solve(n);
  }
});

function solve(n) {
  let a = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      a = n / i;
      break;
    }
  }
  console.log(a, n - a);
}
