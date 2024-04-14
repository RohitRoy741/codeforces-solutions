// Problem Link: https://codeforces.com/problemset/problem/1695/B
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
    console.log("Mike");
    return;
  }
  let lowest1 = Infinity;
  let lowest2 = Infinity;
  lowest1Index = -1;
  lowest2Index = -1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      if (lowest1 > a[i]) {
        lowest1Index = i;
        lowest1 = a[i];
      }
    } else {
      if (lowest2 > a[i]) {
        lowest2Index = i;
        lowest2 = a[i];
      }
    }
  }
  if (
    lowest1 > lowest2 ||
    (lowest1 === lowest2 && lowest1Index > lowest2Index)
  ) {
    console.log("Mike");
  } else {
    console.log("Joe");
  }
}
