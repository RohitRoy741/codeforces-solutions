// Problem Link: https://codeforces.com/problemset/problem/1945/A
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
    const [a, b, c] = lines[i++].split(" ").map(Number);
    solve(a, b, c);
  }
});

function solve(a, b, c) {
  let ans = 0;
  ans += a;
  ans += Math.floor(b / 3);
  let remaining = b % 3;
  if (remaining > 0 && c < 3 - remaining) {
    console.log(-1);
    return;
  }
  ans += Math.ceil((c + remaining) / 3);
  console.log(ans);
}
