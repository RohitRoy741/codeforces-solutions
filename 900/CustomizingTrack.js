// Problem Link: https://codeforces.com/problemset/problem/1543/B
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
  let sum = a.reduce((acc, element) => acc + element, 0);
  //console.log("Sum: ", sum);
  let x = Math.ceil(sum / n);
  //console.log("X: ", x);
  let count1 = 0;
  let runningSum = 0;

  //console.log((sum - runningSum) / (n - count1));
  while (count1 !== n && (sum - runningSum) / (n - count1) !== x - 1) {
    //console.log("Running Sum: ", runningSum);
    runningSum += x;
    count1++;
    //console.log("Count1: ", count1);
    //console.log((sum - runningSum) / (n - count1));
  }
  console.log(count1 * (n - count1));
}
