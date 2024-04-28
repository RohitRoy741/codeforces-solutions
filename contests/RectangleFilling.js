// Problem Link: https://codeforces.com/contest/1966/problem/B
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
    const [n, m] = lines[i++].split(" ").map(Number);
    const rectangle = [];
    for (let j = 0; j < n; j++) {
      const row = lines[i++].split("");
      rectangle.push(row);
    }
    solve(n, m, rectangle);
  }
});

function solve(n, m, rectangle) {
  let row = [],
    column = [];
  let blackN = false;
  let whiteN = false;
  let black0 = false;
  let white0 = false;
  for (let i = 0; i < m; i++) {
    if (rectangle[0][i] === "B") {
      black0 = true;
    } else {
      white0 = true;
    }
    if (rectangle[n - 1][i] === "B") {
      blackN = true;
    } else {
      whiteN = true;
    }
  }
  //console.log(black0, blackN, white0, whiteN);
  if (!(black0 && blackN) && !(white0 && whiteN)) {
    console.log("NO");
    return;
  }
  if (black0 && blackN) {
    row.push("B");
  }
  if (white0 && whiteN) {
    row.push("W");
  }

  black0 = false;
  white0 = false;
  blackN = false;
  whiteN = false;
  for (let i = 0; i < n; i++) {
    if (rectangle[i][0] === "B") {
      black0 = true;
    } else {
      white0 = true;
    }
    if (rectangle[i][m - 1] === "B") {
      blackN = true;
    } else {
      whiteN = true;
    }
  }
  //console.log(black0, blackN, white0, whiteN);
  if (!(black0 && blackN) && !(white0 && whiteN)) {
    console.log("NO");
    return;
  }
  if (black0 && blackN) {
    column.push("B");
  }
  if (white0 && whiteN) {
    column.push("W");
  }
  if (row.length === 1 && column.length === 1 && row[0] !== column[0]) {
    console.log("NO");
    return;
  }
  console.log("YES");
}
