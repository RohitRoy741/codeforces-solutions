// Problem Link: https://codeforces.com/problemset/problem/1765/E
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
    const [n, a, b] = lines[i++].split(" ").map(Number);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  if (b < a) {
    console.log(1);
  } else {
    console.log(Math.ceil(n / a));
  }
}
