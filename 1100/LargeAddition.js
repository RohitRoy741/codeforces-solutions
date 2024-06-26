// Problem Link: https://codeforces.com/problemset/problem/1984/B
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
    const digits = lines[i++].split("").map(Number);
    solve(digits);
  }
});

function solve(digits) {
  const n = digits.length;
  if (digits[0] !== 1 || digits[n - 1] === 9) {
    console.log("NO");
    return;
  }
  for (let i = n - 2; i >= 0; i--) {
    if (digits[i] === 0) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
