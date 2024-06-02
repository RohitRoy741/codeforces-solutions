// Problem Link: https://codeforces.com/problemset/problem/1520/C
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
  if (n === 2) {
    console.log(-1);
    return;
  }
  let odd = 1;
  let even = 2;
  let current = "odd";
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (current === "odd") {
        row.push(odd);
        odd += 2;
        if (odd > n * n) {
          current = "even";
        }
      } else {
        row.push(even);
        even += 2;
      }
    }
    matrix.push(row);
  }
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}
