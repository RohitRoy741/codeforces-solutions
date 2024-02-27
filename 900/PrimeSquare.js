// Problem Link: https://codeforces.com/problemset/problem/1436/B
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
  let matrix = [];
  if (n % 2 === 0) {
    for (let i = 0; i < n; i++) {
      let row = new Array(n).fill(0);
      let index = Math.floor(i / 2);
      row[index * 2] = 1;
      row[index * 2 + 1] = 1;
      matrix.push(row);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      let row = new Array(n).fill(0);
      row[0] = 1;
      row[1] = 1;
      row[2] = 1;
      matrix.push(row);
    }
    for (let i = 3; i < n; i++) {
      let row = new Array(n).fill(0);
      let index = Math.ceil(i / 2);
      row[index * 2 - 1] = 1;
      row[index * 2] = 1;
      matrix.push(row);
    }
  }
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}
