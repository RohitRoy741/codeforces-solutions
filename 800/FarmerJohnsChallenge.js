// Problem Link: https://codeforces.com/problemset/problem/1942/A
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
    solve(n, k);
  }
});

function solve(n, k) {
  if (k !== 1 && k !== n) {
    console.log(-1);
    return;
  }
  let result = Array.from({ length: n }).fill(2);
  if (k === 1) {
    result[0] = 1;
  }
  console.log(result.join(" "));
}
