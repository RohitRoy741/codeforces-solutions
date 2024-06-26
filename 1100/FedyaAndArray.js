// Problem Link: https://codeforces.com/problemset/problem/1793/B
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
  let result = [];
  for (let i = y; i <= x; i++) {
    result.push(i);
  }
  for (let i = x - 1; i >= y + 1; i--) {
    result.push(i);
  }
  console.log(result.length);
  console.log(result.join(" "));
}
