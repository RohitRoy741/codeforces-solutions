// Problem Link: https://codeforces.com/problemset/problem/1927/A
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
    const chars = lines[i++].split("");
    solve(n, chars);
  }
});

function solve(n, chars) {
  let firstIndex = -1;
  for (let i = 0; i < n; i++) {
    if (chars[i] === "B") {
      firstIndex = i;
      break;
    }
  }
  if (firstIndex === -1) {
    console.log(0);
    return;
  }
  let lastIndex = n;
  for (let i = n - 1; i >= 0; i--) {
    if (chars[i] === "B") {
      lastIndex = i;
      break;
    }
  }
  console.log(lastIndex - firstIndex + 1);
}
