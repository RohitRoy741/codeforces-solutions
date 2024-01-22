// Problem Link: https://codeforces.com/problemset/problem/1921/B
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
    const s = lines[i++];
    const f = lines[i++];
    solve(n, s, f);
  }
});

function solve(n, s, f) {
  let excess = 0;
  let deficit = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "1" && f[i] === "0") {
      excess++;
    } else if (s[i] === "0" && f[i] === "1") {
      deficit++;
    }
  }
  console.log(Math.max(excess, deficit));
}
