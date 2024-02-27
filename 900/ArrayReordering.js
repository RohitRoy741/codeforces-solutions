// Problem Link: https://codeforces.com/problemset/problem/1535/B
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
  let evens = [];
  let odds = [];
  for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 0) {
      evens.push(a[i]);
    } else {
      odds.push(a[i]);
    }
  }
  let orderedArray = evens.concat(odds);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (orderedArray[i] % 2 === 0) {
      ans += n - 1 - i;
    } else {
      for (let j = i + 1; j < n; j++) {
        if (gcd(orderedArray[i], orderedArray[j]) > 1) {
          ans++;
        }
      }
    }
  }
  console.log(ans);
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
