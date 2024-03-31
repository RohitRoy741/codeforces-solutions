// Problem Link: https://codeforces.com/problemset/problem/1725/B
let input = "";
process.stdin.on("data", (data) => (input += data));
process.stdin.on("end", () => {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  let i = 0;
  while (i < lines.length) {
    const [n, d] = lines[i++].split(" ").map(Number);
    const p = lines[i++].split(" ").map(Number);
    solve(n, d, p);
  }
});

function solve(n, d, p) {
  p.sort((a, b) => a - b);
  let j = n - 1;
  let i = 0;
  let ans = 0;
  while (i <= j) {
    let count = d % p[j] !== 0 ? Math.ceil(d / p[j]) : d / p[j] + 1;
    //console.log(count);
    i = i + count - 1;
    if (i <= j) {
      ans++;
    }
    j--;
  }
  console.log(ans);
}
