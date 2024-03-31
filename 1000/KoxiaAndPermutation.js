// Problem Link: https://codeforces.com/problemset/problem/1770/B
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
    solve(n, k);
  }
});

function solve(n, k) {
  let arr = new Array(n).fill(0).map((_, i) => i + 1);
  let i = 0,
    j = n - 1;
  let result = [];
  while (i < j) {
    result.push(arr[j--]);
    result.push(arr[i++]);
  }
  if (n % 2) result.push(arr[i]);
  console.log(result.join(" "));
}
