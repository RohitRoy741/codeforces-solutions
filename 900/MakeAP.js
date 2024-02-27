// Problem Link: https://codeforces.com/problemset/problem/1624/B
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
    const [a, b, c] = lines[i++].split(" ").map(Number);
    solve(a, b, c);
  }
});

function solve(a, b, c) {
  if (isAP(a, b, c)) {
    console.log("YES");
    return;
  }
  if (b > a && b > c) {
    if ((b + (b - a)) % c === 0) {
      console.log("YES");
      return;
    }
    if ((b + (b - c)) % a === 0) {
      console.log("YES");
      return;
    }
    console.log("NO");
    return;
  }
  if (b < a && b < c) {
    if ((Math.abs(a - c) / 2) % 1 !== 0) {
      console.log("NO");
      return;
    }
    if ((Math.abs(a - c) / 2 + Math.min(a, c)) % b === 0) {
      console.log("YES");
      return;
    }
    console.log("NO");
    return;
  }
  let min = Math.min(a, c);
  let max = Math.max(a, c);
  a = min;
  c = max;
  if (b - (c - b) > a && (b - (c - b)) % a === 0) {
    console.log("YES");
    return;
  }
  if (b + (b - a) > c && (b + (b - a)) % c === 0) {
    console.log("YES");
    return;
  }
  if ((Math.abs(a - c) / 2) % 1 === 0 && (Math.abs(a - c) / 2 + a) % b === 0) {
    console.log("YES");
    return;
  }
  console.log("NO");
}

function isAP(a, b, c) {
  return b - a === c - b;
}
