// Problem Link: https://codeforces.com/problemset/problem/1766/B
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
  if (n === 1) {
    console.log("NO");
    return;
  }
  for (let i = 1; i < n - 2; i++) {
    let curr = s[i - 1] + s[i];
    for (let j = i + 1; j < n - 1; j++) {
      let next = s[j] + s[j + 1];
      if (curr === next) {
        console.log("YES");
        return;
      }
    }
  }
  console.log("NO");
}
