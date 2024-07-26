// Problem Link: https://codeforces.com/problemset/problem/1878/B
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
  const result = [];
  let a = 1;
  for (let i = 0; i < n; i++) {
    result.push(a * 3);
    a += 2;
  }
  console.log(result.join(" "));
}
