//Problem Link: https://codeforces.com/problemset/problem/1878/C
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
    const [n, k, x] = lines[i++].split(" ").map(Number);
    solve(n, k, x);
  }
});

function solve(n, k, x) {
  const left = k + (k * (k - 1)) / 2;
  const right = k * n - (k * (k - 1)) / 2;
  if (x >= left && x <= right) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
