// Problem Link: https://codeforces.com/problemset/problem/1713/B
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
  let max = a[0];
  let maxIndex = 0;
  for (let i = 1; i < n; i++) {
    if (a[i] > max) {
      max = a[i];
      maxIndex = i;
    }
  }
  for (let i = 1; i < maxIndex; i++) {
    if (a[i] < a[i - 1]) {
      console.log("NO");
      return;
    }
  }
  for (let i = maxIndex + 1; i < n; i++) {
    if (a[i] > a[i - 1]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
