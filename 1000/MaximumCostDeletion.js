// Problem Link: https://codeforces.com/problemset/problem/1550/B
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
    const [n, a, b] = lines[i++].split(" ").map(Number);
    const string = lines[i++].split("");
    solve(n, a, b, string);
  }
});

function solve(n, a, b, string) {
  let total = 0;
  let cost1 = a * string.length;
  if (b >= 0) {
    total = cost1 + b * string.length;
    console.log(total);
    return;
  }
  let ones = 0;
  let zeroes = 0;
  let i = 1;
  let prev = string[0];
  while (i < n) {
    if (prev !== string[i]) {
      if (prev === "1") {
        ones++;
      } else {
        zeroes++;
      }
    }
    prev = string[i];
    i++;
  }
  if (prev === "1") {
    ones++;
  } else {
    zeroes++;
  }
  //console.log(ones, zeroes);
  let count = Math.min(ones, zeroes) + 1;
  total = cost1 + b * count;
  console.log(total);
}
