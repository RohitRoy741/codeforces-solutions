// Problem Link: https://codeforces.com/problemset/problem/1617/B
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
    let n = +lines[i++];
    solve(n);
  }
});

function solve(n) {
  if (n % 2 === 0) {
    console.log(`${n - 3} ${2} ${1}`);
  } else {
    if (((n - 1) / 2) % 2 === 0) {
      console.log(`${(n - 1) / 2 - 1} ${(n - 1) / 2 + 1} ${1}`);
    } else {
      let i = 3;
      let x = n - i - 1;
      while (gcd(Math.max(x, i), Math.min(x, i)) !== 1) {
        i += 2;
        x = n - i - 1;
      }
      console.log(`${x} ${i} ${1}`);
    }
  }
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
