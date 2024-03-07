// Problem Link: https://codeforces.com/problemset/problem/1883/C
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
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    let mod = a[i] % k;
    let required = mod === 0 ? 0 : k - mod;
    min = Math.min(min, required);
  }
  console.log(min);
}
