// Problem Link: https://codeforces.com/problemset/problem/1569/B
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
    const expectations = lines[i++].split("").map(Number);
    solve(n, expectations);
  }
});

function solve(n, expectations) {
  winningExpectations = [];
  for (let i = 0; i < n; i++) {
    if (expectations[i] === 2) {
      winningExpectations.push(i);
    }
  }
  if (winningExpectations.length === 1 || winningExpectations.length === 2) {
    console.log("NO");
    return;
  }
  console.log("YES");
  const result = [];
  let winnerIndex = 0;
  for (let i = 0; i < n; i++) {
    let row = Array.from({ length: n }, () => "=");
    row[i] = "X";
    if (expectations[i] === 1) {
      result.push(row.join(""));
    } else {
      let winningIndex = (winnerIndex + 1) % winningExpectations.length;
      let losingIndex =
        (winnerIndex - 1 + winningExpectations.length) %
        winningExpectations.length;
      row[winningExpectations[winningIndex]] = "+";
      row[winningExpectations[losingIndex]] = "-";
      winnerIndex++;
      result.push(row.join(""));
    }
  }
  console.log(result.join("\n"));
}
