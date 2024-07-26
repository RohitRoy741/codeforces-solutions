// Problem Link: https://codeforces.com/problemset/problem/1873/D
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
    const s = lines[i++];
    solve(n, k, s);
  }
});

function solve(n, k, s) {
  let i = 0;
  let total = 0;
  while (i < n) {
    if (s[i] === "B") {
      total++;
      i = i + k;
    } else {
      i++;
    }
  }
  console.log(total);
}
