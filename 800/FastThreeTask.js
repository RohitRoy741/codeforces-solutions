// Problem Link: https://codeforces.com/problemset/problem/1933/B
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
  const sum = a.reduce((acc, curr) => acc + curr, 0);
  if (sum % 3 === 0) {
    console.log(0);
    return;
  }
  if (sum % 3 === 1) {
    for (let i = 0; i < n; i++) {
      if (a[i] % 3 === 1) {
        console.log(1);
        return;
      }
    }
    console.log(2);
    return;
  }
  console.log(1);
}
