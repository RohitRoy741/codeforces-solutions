// Problem Link: https://codeforces.com/contest/1946/problem/0
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
  a.sort((a, b) => a - b);
  let median = Math.ceil(n / 2);
  median = median - 1;
  //   console.log(median);
  //   console.log(a);
  //   console.log(a[median]);
  let count = 0;
  for (let i = median; i < n && a[i] === a[median]; i++) {
    count++;
  }
  console.log(count);
}
