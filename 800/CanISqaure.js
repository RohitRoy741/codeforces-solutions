// Problem Link: https://codeforces.com/problemset/problem/1915/C
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
    const squares = lines[i++].split(" ").map(Number);
    solve(n, squares);
  }
});

function solve(n, squares) {
  let sum = squares.reduce((acc, element) => acc + element, 0);
  if (Math.sqrt(sum) % 1 !== 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
