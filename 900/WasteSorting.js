// Problem Link: https://codeforces.com/problemset/problem/1468/N
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
    const [c1, c2, c3] = lines[i++].split(" ").map(Number);
    const [a1, a2, a3, a4, a5] = lines[i++].split(" ").map(Number);
    solve(c1, c2, c3, a1, a2, a3, a4, a5);
  }
});

function solve(c1, c2, c3, a1, a2, a3, a4, a5) {
  if (c1 < a1 || c2 < a2 || c3 < a3) {
    console.log("NO");
    return;
  }
  let extra1 = c1 - a1;
  let extra2 = c2 - a2;
  let extra3 = c3 - a3;
  if (extra1 + extra3 < a4) {
    console.log("NO");
    return;
  }
  a4 = a4 - extra1;
  extra3 = extra3 - Math.max(0, a4);
  if (extra2 + extra3 < a5) {
    console.log("NO");
    return;
  }
  console.log("YES");
}
