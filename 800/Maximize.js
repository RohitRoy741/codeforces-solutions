// Problem Link: https://codeforces.com/problemset/problem/1968/A
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
    const x = +lines[i++];
    solve(x);
  }
});

function solve(x) {
  console.log(x - 1);
}
