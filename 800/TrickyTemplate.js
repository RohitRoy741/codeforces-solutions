// Problem Link: https://codeforces.com/problemset/problem/1922/A

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
    const a = lines[i++];
    const b = lines[i++];
    const c = lines[i++];
    solve(n, a, b, c);
  }
});

function solve(n, a, b, c) {
  for (let i = 0; i < n; i++) {
    if (c[i] !== a[i] && c[i] !== b[i]) {
      console.log("YES");
      return;
    }
  }
  console.log("NO");
}
