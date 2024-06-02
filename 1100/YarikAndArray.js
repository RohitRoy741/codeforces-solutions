// Problem Link: https://codeforces.com/problemset/problem/1899/C
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
  let max = a[0];
  let sums = [a[0]];
  for (let i = 1; i < n; i++) {
    if (Math.abs(a[i]) % 2 === Math.abs(a[i - 1]) % 2) {
      sums.push(a[i]);
      max = Math.max(max, a[i]);
    } else {
      sums.push(Math.max(a[i], sums[sums.length - 1] + a[i]));
      max = Math.max(max, sums[sums.length - 1]);
    }
  }
  console.log(max);
}
