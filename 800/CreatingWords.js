// Problem Link: https://codeforces.com/problemset/problem/1985/A
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
    const [a, b] = lines[i++].split(" ");
    solve(a, b);
  }
});

function solve(a, b) {
  console.log(b[0] + a.slice(1) + " " + a[0] + b.slice(1));
}
