//Problem Link: https://codeforces.com/problemset/problem/1475/B
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
  let count = Math.floor(n / 2020);
  let rem = n % 2020;
  if (rem <= count) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
