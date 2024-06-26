// Problem Link: https://codeforces.com/problemset/problem/1811/C
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
    const b = lines[i++].split(" ").map(Number);
    solve(n, b);
  }
});

function solve(n, b) {
  let a = [];
  if (b[0] < b[1]) {
    a.push(0);
    let prev = 0;
    for (let i = 0; i < n - 1; i++) {
      if (b[i] === prev && b[i] > b[i + 1]) {
        a.push(0);
        prev = 0;
      } else {
        a.push(b[i]);
        prev = b[i];
      }
    }
    console.log(a.join(" "));
    return;
  }
  b.push(Infinity);
  let flag = false;
  for (let i = 0; i < n - 1; i++) {
    if (b[i] < b[i + 1] && !flag) {
      a.push(b[i]);
      a.push(0);
      flag = true;
    } else {
      a.push(b[i]);
    }
  }
  console.log(a.join(" "));
}
