// Problem Link: https://codeforces.com/problemset/problem/1914/A
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
    const logs = lines[i++];
    solve(n, logs);
  }
});

function solve(n, logs) {
  const times = Array.from({ length: 26 }, (_, i) => i + 1);
  for (let log of logs) {
    times[log.charCodeAt(0) - 65]--;
  }
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    if (times[i] <= 0) {
      ans++;
    }
  }
  console.log(ans);
}
