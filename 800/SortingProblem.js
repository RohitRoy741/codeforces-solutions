// Problem Link: https://codeforces.com/problemset/problem/1971/A
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
    const [x, y] = lines[i++].split(" ").map(Number);
    solve(x, y);
  }
});

function solve(x, y) {
  console.log(Math.min(x, y), Math.max(x, y));
}
