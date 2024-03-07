//Problem Link: https://codeforces.com/problemset/problem/1840/C
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
    const [n, k, q] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, q, a);
  }
});

function solve(n, k, q, a) {
  let prev = 0;
  let ways = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] <= q) {
      prev++;
      if (prev >= k) {
        ways += prev - k + 1;
      }
    } else {
      prev = 0;
    }
  }
  console.log(ways);
}
