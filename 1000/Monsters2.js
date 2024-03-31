// Problem Link: https://codeforces.com/problemset/problem/1784/A
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
    let monsters = lines[i++].split(" ").map(Number);
    solve(n, monsters);
  }
});

function solve(n, monsters) {
  monsters.sort((a, b) => a - b);
  let required = 1;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (monsters[i] < required) {
      continue;
    } else if (monsters[i] === required) {
      required++;
    } else {
      result += monsters[i] - required;
      required++;
    }
  }
  console.log(result);
}
