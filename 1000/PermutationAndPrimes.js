// Problem Link: https://codeforces.com/problemset/problem/1844/B
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
  let result = Array(n).fill(0);
  let midIndex = Math.floor(n / 2);
  result[midIndex] = 1;
  if (n > 1) {
    result[0] = 2;
  }
  if (n > 2) {
    result[n - 1] = 3;
  }
  for (let i = 1; i < n - 1; i++) {
    if (i < midIndex) {
      result[i] = i + 3;
    } else if (i > midIndex) {
      result[i] = i + 2;
    }
  }
  console.log(result.join(" "));
}
