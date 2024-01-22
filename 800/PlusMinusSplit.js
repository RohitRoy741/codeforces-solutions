// Problem Link: https://codeforces.com/problemset/problem/1919/B
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
    const s = lines[i++];
    solve(n, s);
  }
});

function solve(n, s) {
  let ans = 0;
  for (let char of s) {
    if (char === "+") {
      ans++;
    } else {
      ans--;
    }
  }
  console.log(Math.abs(ans));
}
