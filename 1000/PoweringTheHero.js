// Problem Link: https://codeforces.com/problemset/problem/1800/C1
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
    const s = lines[i++].split(" ").map(Number);
    solve(n, s);
  }
});

function solve(n, s) {
  let running = [0];
  let power = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] !== 0) {
      running.push(s[i]);
    } else {
      if (running.length < 1) {
        continue;
      }
      running.sort((a, b) => a - b);
      power += running.pop();
    }
  }
  console.log(power);
}
