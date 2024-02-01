// Problem Link: https://codeforces.com/problemset/problem/1916/A
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
    const arr = lines[i++].split(" ").map(Number);
    solve(n, k, arr);
  }
});

function solve(n, k, arr) {
  let product = 1;
  for (let num of arr) {
    product *= num;
  }
  if (2023 % product !== 0) {
    console.log("NO");
    return;
  }
  console.log("YES");
  let ans = "" + Math.floor(2023 / product);
  k--;
  while (k--) {
    ans += " 1";
  }
  console.log(ans);
}
