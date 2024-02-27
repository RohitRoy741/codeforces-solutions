// Problem Link: https://codeforces.com/problemset/problem/1467/A
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
  if (n === 1) {
    console.log(9);
    return;
  } else if (n === 2) {
    console.log(98);
    return;
  } else if (n === 3) {
    console.log(989);
    return;
  }
  let res = "989";
  let x = 0;
  for (let i = 4; i <= n; i++) {
    res += x;
    x = (x + 1) % 10;
  }
  console.log(res);
}
