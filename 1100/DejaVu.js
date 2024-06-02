// Problem Link: https://codeforces.com/problemset/problem/1891/B
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
    const [n, q] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const x = lines[i++].split(" ").map(Number);
    solve(n, q, a, x);
  }
});

function solve(n, q, a, x) {
  let min = Infinity;

  for (let i = 0; i < q; i++) {
    if (x[i] >= min) continue;
    min = x[i];
    let tester = Math.pow(2, x[i]);
    let modifier = Math.pow(2, x[i] - 1);
    for (let j = 0; j < n; j++) {
      if (a[j] % tester === 0) {
        a[j] += modifier;
      }
    }
  }
  console.log(a.join(" "));
}
