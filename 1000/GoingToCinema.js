// Problem Link: https://codeforces.com/problemset/problem/1781/B
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
  a.sort((a, b) => a - b);
  //   console.log(a);
  let ans = 0;
  if (a[0] > 0) {
    ans++;
  }
  let i = 0;
  while (i < n) {
    // console.log("Iteration: ", i, a[i]);
    if (a[i] === i) {
      //   console.log("a[i] === i", i, a[i]);
      let j = i + 1;
      while (j < n && a[j] <= j) {
        // console.log("j: ", j, a[j]);
        j++;
      }
      i = j;
      //   console.log("i: ", i);
      ans++;
    } else {
      i++;
    }
  }
  console.log(ans);
}
