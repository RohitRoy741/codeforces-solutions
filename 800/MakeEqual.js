// Problem Link: https://codeforces.com/problemset/problem/1931/B
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
  let sum = a.reduce((acc, element) => acc + element, 0);
  let ideal = sum / n;
  let extra = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] > ideal) {
      extra += a[i] - ideal;
    } else {
      let required = ideal - a[i];
      if (required > extra) {
        console.log("NO");
        return;
      }
      extra -= required;
    }
  }
  if (extra === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
