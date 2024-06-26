// Problem Link: https://codeforces.com/problemset/problem/1827/A
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
    const b = lines[i++].split(" ").map(Number);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  const mod = Math.pow(10, 9) + 7;
  a.sort((a, b) => a - b);
  b.sort((a, b) => b - a);
  //   console.log(a, b);
  let pointer = n - 1;
  let count = 0;
  let result = 1;
  for (let i = 0; i < n; i++) {
    // console.log("i", i, "pointer", pointer);
    while (pointer >= 0 && a[pointer] > b[i]) {
      pointer--;
      count++;
    }
    // console.log("count", count);
    if (count - i <= 0) {
      console.log(0);
      return;
    }
    result = (result * (count - i)) % mod;
  }
  console.log(result);
}
