// Problem Link: https://codeforces.com/problemset/problem/1607/C
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
  //console.log(a);
  let min = -Infinity;
  let curr = 0;
  for (let i = 0; i < n; i++) {
    let temp = a[i] - curr;
    //console.log(a[i], curr, temp);
    curr += temp;
    min = Math.max(min, temp);
  }
  console.log(min);
}
