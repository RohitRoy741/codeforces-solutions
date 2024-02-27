// Problem Link: https://codeforces.com/problemset/problem/1525/B
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
  let flag = true;
  for (let i = 1; i <= n; i++) {
    if (a[i - 1] !== i) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(0);
    return;
  }
  if (a[0] === 1 || a[n - 1] === n) {
    console.log(1);
  } else if (a[0] === n && a[n - 1] === 1) {
    console.log(3);
  } else {
    console.log(2);
  }
}
