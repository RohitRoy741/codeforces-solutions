// Problem Link: https://codeforces.com/problemset/problem/1941/A
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
    const [n, m, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, m, k, a, b);
  }
});

function solve(n, m, k, a, b) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let x = a[i];
    if (x > k) continue;
    for (let j = 0; j < m; j++) {
      let y = b[j];
      if (x + y <= k) {
        count++;
      }
    }
  }
  console.log(count);
}
