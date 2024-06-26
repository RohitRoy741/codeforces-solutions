// Problem Link: https://codeforces.com/problemset/problem/1780/B
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
  let sum = 0;
  let prefix = [];
  for (let i = 0; i < n; i++) {
    sum += a[i];
    prefix.push(sum);
  }
  sum = 0;
  let suffix = [];
  for (let i = n - 1; i >= 0; i--) {
    sum += a[i];
    suffix.push(sum);
  }
  suffix.reverse();
  let max = 0;
  for (let i = 0; i < n - 1; i++) {
    const g = gcd(prefix[i], suffix[i + 1]);
    max = Math.max(max, g);
  }
  console.log(max);
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
