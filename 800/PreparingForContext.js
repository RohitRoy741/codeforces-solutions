// Problem Link: https://codeforces.com/problemset/problem/1914/B
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
  let arr = Array.from({ length: n });
  let i = 0;
  while (i < k) {
    arr[i] = i + 1;
    i++;
  }
  let j = 0;
  while (i < n) {
    arr[i] = n - j;
    i++;
    j++;
  }
  console.log(arr.join(" "));
}
