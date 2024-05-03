// Problem link: https://codeforces.com/problemset/problem/1566/C
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
    const a = lines[i++].split("");
    const b = lines[i++].split("");
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  let column = 0;
  let result = 0;
  while (column < n) {
    if (a[column] === "0" && b[column] === "0") {
      if (a[column + 1] === "1" && b[column + 1] === "1") {
        column += 2;
        result += 2;
      } else {
        column++;
        result++;
      }
    } else if (a[column] === "1" && b[column] === "1") {
      if (a[column + 1] === "0" || b[column + 1] === "0") {
        column += 2;
        result += 2;
      } else {
        column++;
      }
    } else {
      column++;
      result += 2;
    }
  }
  console.log(result);
}
