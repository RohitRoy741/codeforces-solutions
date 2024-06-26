// Problem Link: https://codeforces.com/problemset/problem/1981/A
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
    const [l, r] = lines[i++].split(" ").map(Number);
    solve(l, r);
  }
});

function solve(l, r) {
  let binary = r.toString(2);
  let result = binary.length - 1;
  console.log(result);
}
