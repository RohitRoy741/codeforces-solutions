// Problem Link: https://codeforces.com/problemset/problem/1978/B
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
    const [n, a, b] = lines[i++].split(" ").map(BigInt);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  if (a >= b) {
    console.log(String(n * a));
    return;
  }
  let profit = 0n;
  let diff = b - a;
  //console.log("Diff:", diff);
  let remaining = n - diff;
  //console.log("Remaining:", remaining);
  if (remaining > 0n) {
    profit += remaining * a;
  } else {
    diff = n;
  }
  profit += (b * (b + 1n)) / 2n - ((b - diff) * (b - diff + 1n)) / 2n;
  console.log(String(profit));
}
