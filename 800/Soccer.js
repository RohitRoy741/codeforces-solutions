// Problem Link: https://codeforces.com/problemset/problem/1982/A
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
    const [x1, y1] = lines[i++].split(" ").map(Number);
    const [x2, y2] = lines[i++].split(" ").map(Number);
    solve(x1, y1, x2, y2);
  }
});

function solve(x1, y1, x2, y2) {
  let initial = x1 < y1 ? 0 : 1;
  let final = x2 < y2 ? 0 : 1;
  if (initial === final) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
