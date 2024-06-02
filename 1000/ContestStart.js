// Problem Link: https://codeforces.com/problemset/problem/1539/A
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
    const [n, x, t] = lines[i++].split(" ").map(BigInt);
    solve(n, x, t);
  }
});

function solve(n, x, t) {
  if (t < x) {
    console.log(0);
    return;
  }
  if (t === x) {
    console.log(String(n - 1n));
    return;
  }
  const before = t / x;
  if (before >= n) {
    console.log(String((n * (n - 1n)) / 2n));
    return;
  }
  const total = (n - before) * before + (before * (before - 1n)) / 2n;
  console.log(String(total));
}
