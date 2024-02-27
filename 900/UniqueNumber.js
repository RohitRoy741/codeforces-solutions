// Problem Link: https://codeforces.com/problemset/problem/1462/C
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
  if (n <= 9) {
    console.log(n);
    return;
  }
  if (n > 45) {
    console.log(-1);
    return;
  }
  let ans = "9";
  let sum = 9;
  let current = 8;
  while (sum + current < n) {
    sum += current;
    ans = "" + current + ans;
    current--;
  }
  ans = "" + (n - sum) + ans;
  console.log(ans);
}
