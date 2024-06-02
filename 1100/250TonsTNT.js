// Problem Link: https://codeforces.com/problemset/problem/1899/B
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
  let divisors = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  //console.log("Divisors: ", divisors);
  let prefixSum = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];
    prefixSum.push(sum);
  }
  //console.log("Prefix Sum: ", prefixSum);
  let maxDiff = -Infinity;
  for (let divisor of divisors) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = divisor - 1; i < n; i += divisor) {
      let currentSum =
        prefixSum[i] - (prefixSum[i - divisor] ? prefixSum[i - divisor] : 0);
      //console.log("Current:", currentSum);
      max = Math.max(max, currentSum);
      min = Math.min(min, currentSum);
    }
    maxDiff = Math.max(maxDiff, max - min);
  }
  console.log(maxDiff);
}
