// Problem Link: https://codeforces.com/problemset/problem/1433/C
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
  let max = -Infinity;
  let same = true;
  for (let i = 0; i < n; i++) {
    if (a[i] > max) {
      max = a[i];
    }
    if (a[i] !== a[0]) {
      same = false;
    }
  }
  //console.log(same);
  if (same) {
    console.log(-1);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      if (a[i] === max && a[i + 1] < a[i]) {
        console.log(i + 1);
        return;
      }
    } else if (i === n - 1) {
      if (a[i] === max && a[i - 1] < a[i]) {
        console.log(i + 1);
        return;
      }
    } else {
      if (a[i] === max && (a[i - 1] < a[i] || a[i + 1] < a[i])) {
        console.log(i + 1);
        return;
      }
    }
  }
}
