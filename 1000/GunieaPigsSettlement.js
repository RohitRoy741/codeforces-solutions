// Problem Link: https://codeforces.com/problemset/problem/1802/B
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
  let ans = 0;
  let half = 0;
  let empty = 0;
  prev = 2;
  for (let i = 0; i < n; i++) {
    if (a[i] === 2 && prev === 2) continue;
    prev = a[i];
    // console.log("***********************************");
    // console.log("Half: ", half);
    // console.log("Empty: ", empty);
    // console.log("Ans: ", ans);
    // console.log("Plan: ", a[i]);
    if (a[i] === 1) {
      if (empty > 0) {
        empty--;
      } else {
        ans++;
      }
      half++;
    } else {
      if (half > 0) {
        if (half % 2 === 0) {
          empty += (half - 2) / 2;
          half = 2;
        } else {
          empty += (half - 1) / 2;
          half = 1;
        }
      }
    }
    // console.log("Half: ", half);
    // console.log("Empty: ", empty);
    // console.log("Ans: ", ans);
  }
  console.log(ans);
}
