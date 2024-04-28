// Problem Link: https://codeforces.com/contest/1966/problem/C
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
  let set = new Set(a);
  if (set.size % 2 === 0) {
    console.log("Bob");
  } else {
    console.log("Alice");
  }
}
