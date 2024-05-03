// Problem Link: https://codeforces.com/problemset/problem/1937/A
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
    const n = +lines[i++];
    solve(n);
  }
});

function solve(n) {
  let power = Math.floor(Math.log2(n));
  let result = Math.pow(2, power);
  console.log(result);
}
