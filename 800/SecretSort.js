//Problem Link: https://codeforces.com/problemset/problem/1894/A
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
    const plays = lines[i++];
    solve(plays);
  }
});

function solve(plays) {
  console.log(plays[plays.length - 1]);
}
