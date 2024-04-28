// Problem Link: https://codeforces.com/problemset/problem/1955/A
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
  if (2 * a < b) {
    console.log(n * a);
  } else {
    if (n % 2 === 0) {
      console.log((n / 2) * b);
    } else {
      console.log(Math.floor(n / 2) * b + a);
    }
  }
}
