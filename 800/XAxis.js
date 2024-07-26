// Problem Link: https://codeforces.com/problemset/problem/1986/A
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
    const [x, y, z] = lines[i++].split(" ").map(Number);
    solve(x, y, z);
  }
});

function solve(x, y, z) {
  let max = Math.max(x, y, z);
  let min = Math.min(x, y, z);
  let a = x + y + z - max - min;
  let distance = Math.abs(x - a) + Math.abs(y - a) + Math.abs(z - a);
  console.log(distance);
}
