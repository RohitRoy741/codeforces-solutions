// Problem Link: https://codeforces.com/problemset/problem/1883/A
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
    const pin = lines[i++].split("").map(Number);
    solve(pin);
  }
});

function solve(pin) {
  let count = 0;
  let prev = 1;
  for (let num of pin) {
    if (num === 0) {
      num = 10;
    }
    count += Math.abs(num - prev);
    count++;
    prev = num;
  }
  console.log(count);
}
