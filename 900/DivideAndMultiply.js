// Problem Link: https://codeforces.com/problemset/problem/1609/A
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
    n = +lines[i++];
    const arr = lines[i++].split(" ").map(Number);
    solve(n, arr);
  }
});

function solve(n, arr) {
  let mul = 1;
  for (let i = 0; i < n; i++) {
    while (arr[i] % 2 === 0) {
      mul *= 2;
      arr[i] /= 2;
    }
  }
  arr.sort((a, b) => b - a);
  arr[0] *= mul;
  let sum = arr.reduce((acc, element) => acc + element, 0);
  console.log(sum);
}
