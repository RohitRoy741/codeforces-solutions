//Problem Link: https://codeforces.com/problemset/problem/1900/B
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
    const [a, b, c] = lines[i++].split(" ").map(Number);
    solve(a, b, c);
  }
});

function solve(a, b, c) {
  let [x, y, z] = [0, 0, 0];
  if (a === b || Math.abs(a - b) % 2 === 0) {
    z = 1;
  }
  if (b === c || Math.abs(b - c) % 2 === 0) {
    x = 1;
  }
  if (c === a || Math.abs(c - a) % 2 === 0) {
    y = 1;
  }
  console.log(x, y, z);
}
