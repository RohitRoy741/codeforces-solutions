// Problem Link: https://codeforces.com/problemset/problem/1896/A
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
    const arr = lines[i++].split(" ").map(Number);
    solve(n, arr);
  }
});

function solve(n, arr) {
  if (arr[0] === 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
