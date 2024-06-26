// Problem Link: https://codeforces.com/problemset/problem/1826/B
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
    const a = lines[i++].split(" ").map(Number);
    solve(n, a);
  }
});

function solve(n, a) {
  if (n === 1) {
    console.log(0);
    return;
  }
  let isInfinite = true;
  let existing = -1;
  for (
    let pointer1 = 0, pointer2 = n - 1;
    pointer1 < pointer2;
    pointer1++, pointer2--
  ) {
    if (a[pointer1] === a[pointer2]) {
      continue;
    }
    isInfinite = false;
    let x = Math.min(a[pointer1], a[pointer2]);
    let y = Math.max(a[pointer1], a[pointer2]);
    let d = y - x;
    if (d <= x) {
      if (existing === -1) {
        existing = d;
      } else {
        existing = gcd(existing, d);
      }
    } else {
      if (existing === -1) {
        existing = y - x;
      } else {
        existing = gcd(existing, y - x);
      }
    }
  }
  if (isInfinite) {
    console.log(0);
  } else {
    console.log(existing);
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
