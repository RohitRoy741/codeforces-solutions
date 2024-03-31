// Problem Link: https://codeforces.com/contest/1950/problem/B
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
    solve(n);
  }
});

function solve(n) {
  let row1 = [];
  let char = "#";
  for (let i = 0; i < n; i++) {
    row1.push(char);
    row1.push(char);
    char = char === "#" ? "." : "#";
  }
  let row2 = [];
  char = ".";
  for (let i = 0; i < n; i++) {
    row2.push(char);
    row2.push(char);
    char = char === "#" ? "." : "#";
  }
  let matrix = [];
  let current = row1;
  for (let i = 0; i < n; i++) {
    matrix.push(current.join(""));
    matrix.push(current.join(""));
    current = current === row1 ? row2 : row1;
  }
  console.log(matrix.join("\n"));
}
