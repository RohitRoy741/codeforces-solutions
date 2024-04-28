// Problem Link: https://codeforces.com/problemset/problem/1942/B
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
  let p = new Set();
  let mex = 0;
  for (let i = 0; i < n; i++) {
    let x = mex - a[i];
    if (x < 0 || p.has(x)) {
      p.add(mex);
      mex++;
      while (p.has(mex)) {
        mex++;
      }
    } else {
      p.add(x);
    }
  }
  console.log(Array.from(p).join(" "));
}
