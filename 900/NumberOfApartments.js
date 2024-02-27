// Problem Link: https://codeforces.com/problemset/problem/1430/A
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
  let r = n % 3;
  if (r === 0) {
    console.log(n / 3, 0, 0);
  } else if (n % 3 === 1) {
    if (n - 7 < 0) {
      console.log(-1);
    } else {
      console.log((n - 7) / 3, 0, 1);
    }
  } else if (n % 3 === 2) {
    if (n - 3 < 0) {
      console.log(-1);
    } else {
      console.log((n - 5) / 3, 1, 0);
    }
  }
}
