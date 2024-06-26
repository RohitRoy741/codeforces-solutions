// Problem Link: https://codeforces.com/problemset/problem/1968/B
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
    const [m, n] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split("").map(Number);
    const b = lines[i++].split("").map(Number);
    solve(m, n, a, b);
  }
});

function solve(m, n, a, b) {
  let pointer = 0;
  let result = 0;
  for (let i = 0; i < m; i++) {
    while (pointer < n && b[pointer] !== a[i]) {
      pointer++;
    }
    if (pointer >= n) {
      break;
    } else {
      result++;
      pointer++;
    }
  }
  console.log(result);
}
