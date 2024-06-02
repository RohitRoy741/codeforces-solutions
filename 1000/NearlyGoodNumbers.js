// Problem Link: https://codeforces.com/problemset/problem/1521/A
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
    const [a, b] = lines[i++].split(" ").map(Number);
    solve(a, b);
  }
});

function solve(a, b) {
  if (b === 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
  console.log(a * b, a, a * b + a);
}
