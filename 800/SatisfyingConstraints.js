// Problem Link: https://codeforces.com/problemset/problem/1920/A
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
    const constraints = [];
    while (constraints.length < n) {
      const [a, b] = lines[i++].split(" ").map(Number);
      constraints.push([a, b]);
    }
    solve(n, constraints);
  }
});

function solve(n, constraints) {
  let left = -Infinity;
  let right = Infinity;
  const excluded = [];
  for (const [a, b] of constraints) {
    if (a === 1) {
      left = Math.max(left, b);
    } else if (a === 2) {
      right = Math.min(right, b);
    } else if (a === 3) {
      excluded.push(b);
    }
  }
  if (left > right) {
    console.log(0);
    return;
  }
  let ans = right - left + 1;
  for (let b of excluded) {
    if (b >= left && b <= right) {
      ans--;
    }
  }
  console.log(ans);
}
