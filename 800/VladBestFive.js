// Problem Link: https://codeforces.com/problemset/problem/1926/A
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
    const string = lines[i++];
    solve(string);
  }
});

function solve(string) {
  let countA = 0;
  let countB = 0;
  for (let char of string) {
    if (char === "A") {
      countA++;
    } else {
      countB++;
    }
  }
  console.log(countA > countB ? "A" : "B");
}
