// Problem Link: https://codeforces.com/problemset/problem/1974/A
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
  let total = Math.ceil(y / 2);
  let onePlaced = total * 7;
  if (y % 2 === 1) {
    onePlaced += 4;
  }
  if (x > onePlaced) {
    total += Math.ceil((x - onePlaced) / 15);
  }
  console.log(total);
}
