// Problem Link: https://codeforces.com/problemset/problem/1989/A
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
    const [x, y] = lines[i++].split(" ").map(Number);
    solve(x, y);
  }
});

function solve(x, y) {
  if (y < -1) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
