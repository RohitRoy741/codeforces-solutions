// Problem Link: https://codeforces.com/problemset/problem/1926/B
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
    let n = +lines[i++];
    const matrix = [];
    while (n--) {
      const row = lines[i++].split("").map(Number);
      matrix.push(row);
    }
    solve(matrix);
  }
});

function solve(matrix) {
  for (let row of matrix) {
    if (count(row) === 1) {
      console.log("TRIANGLE");
      return;
    }
  }
  console.log("SQUARE");
}

function count(row) {
  let count = 0;
  for (let num of row) {
    if (num === 1) {
      count++;
    }
  }
  return count;
}
