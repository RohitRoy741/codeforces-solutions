//Problem Link: https://codeforces.com/problemset/problem/1816/B
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
  let firstRow = Array(n).fill(0);
  firstRow[0] = 2 * n;
  let secondRow = Array(n).fill(0);
  secondRow[n - 1] = 2 * n - 1;
  let positives = [];
  for (let i = 2 * n - 2; i > n; i--) {
    positives.push(i);
  }
  let negatives = [];
  for (let i = 1; i <= n; i++) {
    negatives.push(i);
  }
  positives.reverse();
  //   console.log(positives);
  //   console.log(negatives);
  let firstRowIndex = 1;
  let secondRowIndex = 0;
  for (let i = 0; i < n / 2 - 1; i++) {
    secondRow[secondRowIndex++] = negatives.pop();
    secondRow[secondRowIndex++] = positives.pop();
    firstRow[firstRowIndex++] = negatives.pop();
    firstRow[firstRowIndex++] = positives.pop();
  }
  secondRow[secondRowIndex++] = negatives.pop();
  firstRow[firstRowIndex++] = negatives.pop();
  console.log(firstRow.join(" "));
  console.log(secondRow.join(" "));
}
