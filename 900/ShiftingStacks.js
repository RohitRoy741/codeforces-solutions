// Problem Link: https://codeforces.com/problemset/problem/1486/A
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
  const sum = a.reduce((acc, element) => acc + element, 0);
  let required = (n * (n - 1)) / 2;
  if (sum < required) {
    console.log("NO");
    return;
  }
  let extra = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] > i) {
      extra += a[i] - i;
    } else if (a[i] + extra < i) {
      console.log("NO");
      return;
    } else {
      extra -= i - a[i];
    }
  }
  console.log("YES");
}
