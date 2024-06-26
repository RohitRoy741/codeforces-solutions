// Problem Link: https://codeforces.com/problemset/problem/1977/A
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
    const [n, m] = lines[i++].split(" ").map(Number);
    solve(n, m);
  }
});

function solve(n, m) {
  if (n < m) {
    console.log("No");
    return;
  }
  let remaining = n - m;
  if (remaining % 2 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
