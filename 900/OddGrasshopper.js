// Problem Link: https://codeforces.com/problemset/problem/1607/B
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
    let [x, n] = lines[i++].split(" ").map(Number);
    solve(x, n);
  }
});

function solve(x, n) {
  if (x % 2 === 0) {
    let r = n % 4;
    if (r === 0) {
      console.log(x);
    } else if (r === 1) {
      console.log(x - n);
    } else if (r === 2) {
      console.log(x + 1);
    } else if (r === 3) {
      console.log(x + n + 1);
    }
  } else {
    let r = n % 4;
    if (r === 0) {
      console.log(x);
    } else if (r === 1) {
      console.log(x + n);
    } else if (r === 2) {
      console.log(x - 1);
    } else if (r === 3) {
      console.log(x - n - 1);
    }
  }
}
