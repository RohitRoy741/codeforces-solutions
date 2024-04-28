// Problem Link: https://codeforces.com/problemset/problem/1921/D
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
    const [n, m] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, m, a, b);
  }
});

function solve(n, m, a, b) {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);

  // If maximum element of a is less than minimum element of b
  if (a[n - 1] <= b[0]) {
    let positive = b.slice(m - n, m).reduce((acc, val) => acc + val, 0);
    let negative = a.reduce((acc, val) => acc + val, 0);
    console.log(positive - negative);
    return;
  }
  // If minimum element of a is greater than maximum element of b
  else if (a[0] >= b[m - 1]) {
    let positive = a.reduce((acc, val) => acc + val, 0);
    let negative = b.slice(0, n).reduce((acc, val) => acc + val, 0);
    console.log(positive - negative);
    return;
  }

  let ans = 0;
  let p1 = n - 1;
  let p2 = m - 1;
  for (let i = 0; i < n; i++) {
    let diff1 = Math.abs(a[i] - b[p2]);
    let diff2 = Math.abs(a[i] - b[p1]);
    if (diff1 >= diff2) {
      ans += diff1;
    } else {
      ans += diff2;
    }
    p1--;
    p2--;
  }
  console.log(ans);
}
