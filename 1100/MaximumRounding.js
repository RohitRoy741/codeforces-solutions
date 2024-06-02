// Problem Link: https://codeforces.com/problemset/problem/1857/B
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
    let digits = lines[i++].split("").map(Number);
    digits = [0, ...digits];
    solve(digits);
  }
});

function solve(digits) {
  let zeroIndex = digits.length;
  let i = digits.length - 2;
  while (i >= 0) {
    if (digits[i + 1] >= 5) {
      while (digits[i] === 9) {
        i--;
      }
      digits[i]++;
      zeroIndex = i + 1;
    }
    i--;
  }
  for (i = zeroIndex; i < digits.length; i++) {
    digits[i] = 0;
  }
  if (digits[0] === 0) {
    digits.shift();
  }
  console.log(digits.join(""));
}
