// Problem Link: https://codeforces.com/contest/1956/problem/0
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
    const karr = lines[i++].split(" ").map(Number);
    const q = lines[i++].split(" ").map(Number);
    solve(n, k, karr, q);
  }
});

function solve(n, k, karr, q) {
  //console.log(n, k, karr, q);
  let a = Math.min(...karr);
  //console.log(a);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(Math.min(a - 1, q[i]));
  }
  console.log(result.join(" "));
}
