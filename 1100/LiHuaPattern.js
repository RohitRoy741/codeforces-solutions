// Problem Link: https://codeforces.com/problemset/problem/1797/B
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
    let pattern = [];
    for (let j = 0; j < n; j++) {
      let row = lines[i++].split(" ").map(Number);
      pattern.push(row);
    }
    solve(n, k, pattern);
  }
});

function solve(n, k, pattern) {
  let required = 0;
  for (let row1 = 0, row2 = n - 1; row1 < row2; row1++, row2--) {
    for (let col1 = 0, col2 = n - 1; col1 < n && col2 >= 0; col1++, col2--) {
      if (pattern[row1][col1] !== pattern[row2][col2]) {
        required++;
      }
    }
  }
  if (n % 2 === 1) {
    for (let col1 = 0, col2 = n - 1; col1 < col2; col1++, col2--) {
      if (
        pattern[Math.floor(n / 2)][col1] !== pattern[Math.floor(n / 2)][col2]
      ) {
        required++;
      }
    }
  }
  if (required === k) {
    console.log("YES");
  } else if (required > k) {
    console.log("NO");
  } else {
    if (n % 2 === 1) {
      console.log("YES");
    } else {
      if ((k - required) % 2 === 0) {
        console.log("YES");
      } else {
        console.log("NO");
      }
    }
  }
}
