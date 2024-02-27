// Problem Link: https://codeforces.com/problemset/problem/1488/A
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
    let [x, y] = lines[i++].split(" ").map(Number);
    solve(x, y);
  }
});

function solve(x, y) {
  let ones = y % x;
  y = y - (y % x);
  let count = y / x;
  let sum = sumOfDigits(count);
  console.log(ones + sum);
}

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
