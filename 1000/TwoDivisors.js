// Problem Link: https://codeforces.com/problemset/problem/1916/B
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
    const [a, b] = lines[i++].split(" ").map(BigInt);
    solve(a, b);
  }
});

function solve(a, b) {
  if (b % a !== BigInt(0)) {
    console.log(String(lcm(b, a)));
  } else {
    let q = b / a;
    console.log(String(b * q));
  }
}

function gcd(a, b) {
  if (b === BigInt(0)) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
