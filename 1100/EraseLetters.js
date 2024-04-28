// Problem Link: https://codeforces.com/problemset/problem/1917/B
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
  let count = 0;
  for (let i = 0; i < n; i++) {
    count++;
    if (i === n - 1) {
      break;
    }
    if (s[i] === s[i + 1]) {
      continue;
    }
    let j = i + 1;
    while (j < n && s[j] !== s[i]) {
      j++;
      count++;
    }
  }
  console.log(count);
}
