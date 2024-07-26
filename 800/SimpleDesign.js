// Problem Link: https://codeforces.com/problemset/problem/1884/A
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
    const [x, k] = lines[i++].split(" ").map(Number);
    solve(x, k);
  }
});

function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    let digit = n % 10;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function solve(x, k) {
  while (digitSum(x) % k != 0) {
    x++;
  }
  console.log(x);
}
