// Problem Link: https://codeforces.com/problemset/problem/1932/A
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
    const s = lines[i++];
    solve(n, s);
  }
});
function solve(n, s) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "@") {
      sum++;
    } else if (s[i] === "*") {
      if (s[i + 1] === "*") {
        break;
      }
    }
  }
  console.log(sum);
}
