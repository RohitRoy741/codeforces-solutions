// Problem Link: https://codeforces.com/problemset/problem/1969/A
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
    const p = lines[i++].split(" ").map(Number);
    solve(n, p);
  }
});

function solve(n, p) {
  for (let i = 0; i < n; i++) {
    let friend = p[i];
    if (p[friend - 1] === i + 1) {
      console.log("2");
      return;
    }
  }
  console.log("3");
}
