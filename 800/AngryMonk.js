// Problem Link: https://codeforces.com/problemset/problem/1992/B
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
  let total = 0;
  a.sort((x, y) => x - y);
  for (let i = 0; i < k - 1; i++) {
    total += a[i] + a[i] - 1;
  }
  console.log(total);
}
