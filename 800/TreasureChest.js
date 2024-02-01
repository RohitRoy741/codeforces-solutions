// Problem Link: https://codeforces.com/problemset/problem/1895/A
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
    const [x, y, k] = lines[i++].split(" ").map(Number);
    solve(x, y, k);
  }
});

function solve(x, y, k) {
  if (x > y) {
    console.log(x);
  } else {
    console.log(y + (y - x - k > 0 ? y - x - k : 0));
  }
}
