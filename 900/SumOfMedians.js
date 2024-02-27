// Problem Link: https://codeforces.com/problemset/problem/1440/B
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, a);
  }
});

function solve(n, k, a) {
  const leave = Math.floor(n / 2);
  //console.log(leave);
  let count = 0;
  let sum = 0;
  for (let i = k * n - 1 - leave; count < k; i = i - leave - 1) {
    //console.log(i, a[i]);
    sum += a[i];
    count++;
  }
  console.log(sum);
}
