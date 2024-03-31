// Problem Link: https://codeforces.com/problemset/problem/1796/B
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
    const a = lines[i++];
    const b = lines[i++];
    solve(a, b);
  }
});

function solve(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 1 && n === 1) {
    if (a === b) {
      console.log("YES");
      console.log(a + "*");
    } else {
      console.log("NO");
    }
    return;
  }
  if (a[m - 1] === b[n - 1]) {
    console.log("YES");
    console.log("*" + a[m - 1]);
    return;
  }
  if (a[0] === b[0]) {
    console.log("YES");
    console.log(a[0] + "*");
    return;
  }
  for (let i = 0; i < m - 1; i++) {
    let sub = a.substring(i, i + 2);
    if (b.includes(sub)) {
      console.log("YES");
      console.log("*" + a.substring(i, i + 2) + "*");
      return;
    }
  }
  console.log("NO");
}
