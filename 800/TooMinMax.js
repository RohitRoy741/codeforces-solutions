// Problem Link: https://codeforces.com/problemset/problem/1934/A
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
  let i = a[0],
    j = a[n - 1],
    k = a[1],
    l = a[n - 2];
  let result = j - i + (j - k) + (l - k) + (l - i);
  console.log(result);
}
