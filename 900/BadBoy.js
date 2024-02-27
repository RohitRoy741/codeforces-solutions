// Problem Link: https://codeforces.com/problemset/problem/1537/B
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
    const [n, m, x, y] = lines[i++].split(" ").map(Number);
    //console.log(n, m, x, y);
    solve(n, m, x, y);
  }
});

function solve(n, m, x, y) {
  console.log(`1 1 ${n} ${m}`);
}
