//Problem Link: https://codeforces.com/problemset/problem/1941/B
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
  for (let i = 0; i < n - 2; i++) {
    if (a[i + 1] < 2 * a[i] || a[i + 2] < a[i]) {
      console.log("NO");
      return;
    }
    a[i + 1] = a[i + 1] - 2 * a[i];
    a[i + 2] = a[i + 2] - a[i];
    a[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    if (a[i] !== 0) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
