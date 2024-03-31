//Problem Link: https://codeforces.com/contest/1944/problem/0
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
  if (k >= n - 1) {
    console.log(1);
  } else {
    console.log(n);
  }
}
