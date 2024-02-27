// Problem Link: https://codeforces.com/problemset/problem/1445/B
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
    const [a, b, c, d] = lines[i++].split(" ").map(Number);
    solve(a, b, c, d);
  }
});

function solve(a, b, c, d) {
  if (a + b >= c + d) {
    console.log(a + b);
  } else {
    console.log(c + d);
  }
}
