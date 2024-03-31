// Problem Link: https://codeforces.com/problemset/problem/1761/B
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
    const a = lines[i++].split(" ").map(Number);
    solve(n, a);
  }
});

function solve(n, a) {
  if (n % 2 === 1) {
    console.log(n);
    return;
  }
  let flag = true;
  for (let i = 0; i < n - 2; i++) {
    if (a[i] !== a[i + 2]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(2 + (n - 2) / 2);
  } else {
    console.log(n);
  }
}
