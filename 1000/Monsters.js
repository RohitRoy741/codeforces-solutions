// Problem Link: https://codeforces.com/problemset/problem/1849/B
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
  let result = [];
  let b = [];
  for (let i = 0; i < n; i++) {
    if (a[i] % k === 0) {
      result.push(i + 1);
    } else {
      b.push([a[i] % k, i]);
    }
  }
  b.sort((a, b) => b[0] - a[0]);
  for (let item of b) {
    result.push(item[1] + 1);
  }
  console.log(result.join(" "));
}
