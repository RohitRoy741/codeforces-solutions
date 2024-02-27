// Problem Link: https://codeforces.com/problemset/problem/1543/A
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
    const [a, b] = lines[i++].split(" ").map(BigInt);
    solve(a, b);
  }
});

function solve(a, b) {
  if (a === b) {
    console.log(0, 0);
  } else {
    let excitement;
    if (a > b) {
      excitement = a - b;
    } else {
      excitement = b - a;
    }
    let increment = excitement - (a % excitement);
    let decrement = a % excitement;
    if (increment < decrement) {
      console.log(String(excitement), String(increment));
    } else {
      console.log(String(excitement), String(decrement));
    }
  }
}
