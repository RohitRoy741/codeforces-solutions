// Problem Link: https://codeforces.com/contest/1946/problem/B
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    try {
      solve(n, k, a);
    } catch (e) {
      //console.log(times);
      console.log(e);
    }
  }
});
let times = 0;
const m = Math.pow(10, 9) + 7;
function solve(n, k, a) {
  times++;
  let sum = 0;
  try {
    sum = a.reduce((acc, curr) => acc + curr, 0);
  } catch (e) {
    console.log("TADA");
  }
  let maxSum = [];
  try {
    maxSum = Array(n).fill(0);
  } catch (e) {
    console.log("TADA2");
  }
  let prev = 0;
  try {
    for (let i = 0; i < n; i++) {
      maxSum[i] = prev + a[i];
      prev = maxSum[i] > 0 ? maxSum[i] : 0;
    }
  } catch (e) {
    console.log("TADA3");
  }
  let max = 0;
  for (let num of maxSum) {
    max = Math.max(max, num);
  }
  if (max < 0) {
    max = 0;
  }

  try {
    for (let i = 0; i < k; i++) {
      sum = (((sum + max) % m) + m) % m;
      if (i === k - 1) {
        break;
      }
      max = (((max * 2) % m) + m) % m;
    }
  } catch (e) {
    console.log("TADA5");
  }
  console.log(((sum % m) + m) % m);
}
