// Problem Link: https://codeforces.com/problemset/problem/1915/B
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
    const row1 = lines[i++];
    const row2 = lines[i++];
    const row3 = lines[i++];
    solve(row1, row2, row3);
  }
});

function solve(row1, row2, row3) {
  let row = row1.includes("?") ? row1 : row2.includes("?") ? row2 : row3;
  if (!row.includes("A")) {
    console.log("A");
  } else if (!row.includes("B")) {
    console.log("B");
  } else {
    console.log("C");
  }
}
