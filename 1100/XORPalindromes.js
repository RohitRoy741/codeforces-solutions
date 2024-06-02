// Problem Link: https://codeforces.com/problemset/problem/1867/B
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
    const s = lines[i++].split("").map(Number);
    solve(n, s);
  }
});

function solve(n, s) {
  let mismatches = 0;
  for (let i = 0, j = n - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) {
      mismatches++;
    }
  }
  let matches = n - mismatches * 2;
  let result = [];
  for (let i = 0; i < n + 1; i++) {
    if (i < mismatches) {
      result.push(0);
    } else if (i === mismatches) {
      result.push(1);
    } else {
      let remaining = i - mismatches;
      if (remaining % 2 === 0) {
        result.push(remaining <= matches ? 1 : 0);
      } else {
        if (matches % 2 === 0) {
          result.push(0);
        } else {
          result.push(remaining <= matches ? 1 : 0);
        }
      }
    }
  }
  console.log(result.join(""));
}
