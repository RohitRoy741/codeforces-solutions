// Problem Link: https://codeforces.com/problemset/problem/1836/B
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
    const [n, k, g] = lines[i++].split(" ").map(BigInt);
    solve(n, k, g);
  }
});

function solve(n, k, g) {
  let coins = k * g;
  let share = ceil(g) - 1n;
  if (share * n >= coins) {
    console.log(String(coins));
    return;
  }
  let saved = share * (n - 1n);
  let last = coins - saved;
  let r = last % g;
  if (r >= ceil(g)) {
    saved -= g - r;
  } else {
    saved += r;
  }
  console.log(String(saved));
}

function ceil(num) {
  return BigInt(Math.ceil(Number(num) / 2));
}
