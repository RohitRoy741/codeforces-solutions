// Problem Link: https://codeforces.com/problemset/problem/1856/B
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
  let ones = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] === 1) {
      ones++;
    } else {
      sum += a[i];
    }
  }
  let nonOnes = n - ones;
  if (n !== 1 && sum - ones >= nonOnes) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
