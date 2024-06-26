// Problem Link: https://codeforces.com/problemset/problem/1791/E
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
  let negatives = 0;
  let minimum = Infinity;
  sum = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] < 0) {
      negatives++;
    }
    minimum = Math.min(minimum, Math.abs(a[i]));
    sum += Math.abs(a[i]);
  }
  if (negatives % 2 === 0) {
    console.log(sum);
  } else {
    console.log(sum - minimum - minimum);
  }
}
