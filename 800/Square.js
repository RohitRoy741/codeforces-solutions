// Problem Link: https://codeforces.com/problemset/problem/1921/A
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
    const [x3, y3] = lines[i++].split(" ").map(Number);
    const [x4, y4] = lines[i++].split(" ").map(Number);
    solve(x1, y1, x2, y2, x3, y3, x4, y4);
  }
});

function solve(x1, y1, x2, y2, x3, y3, x4, y4) {
  let side;
  if (x1 === x2) {
    side = x1 - x3;
  } else if (x1 === x3) {
    side = x1 - x2;
  } else if (x1 === x4) {
    side = x1 - x2;
  }
  console.log(side * side);
}
