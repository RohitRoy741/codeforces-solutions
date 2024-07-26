// Problem Link: https://codeforces.com/problemset/problem/1987/A
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
    const [n, k] = lines[i++].split(" ").map(Number);
    solve(n, k);
  }
});

function solve(n, k) {
  console.log(k * (n - 1) + 1);
}
