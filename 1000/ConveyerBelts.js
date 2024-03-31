//Problem Link: https://codeforces.com/problemset/problem/1811/B
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
    const [n, x1, y1, x2, y2] = lines[i++].split(" ").map(Number);
    solve(n, x1, y1, x2, y2);
  }
});

function solve(n, x1, y1, x2, y2) {
  let belt1 = x1 <= n / 2 ? x1 : n - x1 + 1;
  let belt2 = y1 <= n / 2 ? y1 : n - y1 + 1;
  let beltA = Math.min(belt1, belt2);
  //console.log(beltA);
  let belt3 = x2 <= n / 2 ? x2 : n - x2 + 1;
  let belt4 = y2 <= n / 2 ? y2 : n - y2 + 1;
  let beltB = Math.min(belt3, belt4);
  //console.log(beltB);
  console.log(Math.abs(beltA - beltB));
}
