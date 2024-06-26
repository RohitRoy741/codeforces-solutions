// Problem Link: https://codeforces.com/problemset/problem/1791/G1
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
    const [n, c] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, c, a);
  }
});

function solve(n, c, a) {
  //console.log(n, c, a);
  let coins = [];
  for (let i = 1; i <= n; i++) {
    coins.push(a[i - 1] + i);
  }
  coins.sort((a, b) => a - b);
  //console.log(coins);
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (c < coins[i]) {
      break;
    }
    c -= coins[i];
    total++;
  }
  console.log(total);
}
