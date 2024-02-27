//Problem Link: https://codeforces.com/problemset/problem/1881/B
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
  let thread = gcd(a, b);
  thread = gcd(thread, c);
  let stepsA = a / thread - 1;
  let stepsB = b / thread - 1;
  let stepsC = c / thread - 1;
  if (stepsA + stepsB + stepsC <= 3) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
