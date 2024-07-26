// Problem Link: https://codeforces.com/problemset/problem/1878/A
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
  for (let i = 0; i < n; i++) {
    if (a[i] === k) {
      console.log("YES");
      return;
    }
  }
  console.log("NO");
}
