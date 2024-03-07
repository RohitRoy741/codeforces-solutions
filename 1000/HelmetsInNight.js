// Problem: https://codeforces.com/problemset/problem/1876/A
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
    const [n, p] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, p, a, b);
  }
});

function solve(n, p, a, b) {
  let total = p;
  let required = n - 1;
  let combined = a.map((ai, i) => [ai, b[i]]).sort((a, b) => a[1] - b[1]);
  //console.log(combined);
  for (let citizen of combined) {
    if (citizen[1] > p) {
      total += required * p;
      break;
    }
    if (citizen[0] < required) {
      total += citizen[0] * citizen[1];
      required -= citizen[0];
    } else {
      total += required * citizen[1];
      required = 0;
      break;
    }
  }
  console.log(total);
}
