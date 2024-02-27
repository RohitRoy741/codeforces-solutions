// Problem Link: https://codeforces.com/problemset/problem/1427/A
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
  let positives = [];
  let negatives = [];
  let zeros = [];
  let sum = 0;
  let positiveSum = 0;
  let negativeSum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];
    if (a[i] > 0) {
      positives.push(a[i]);
      positiveSum += a[i];
    } else if (a[i] < 0) {
      negatives.push(a[i]);
      negativeSum += Math.abs(a[i]);
    } else {
      zeros.push(a[i]);
    }
  }
  if (sum === 0) {
    console.log("NO");
    return;
  }
  console.log("YES");
  let result;
  if (positiveSum > negativeSum) {
    result = positives.concat(negatives).concat(zeros);
  } else {
    result = negatives.concat(positives).concat(zeros);
  }
  console.log(result.join(" "));
}
