// Problem Link: https://codeforces.com/problemset/problem/1612/B
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
    const [n, a, b] = lines[i++].split(" ").map(Number);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  let arr = new Array(n);
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
  }
  let left = [];
  let index;
  for (index = n; index > a && left.length < n / 2 - 1; index--) {
    if (index === b) continue;
    left.push(index);
  }
  left.push(a);
  let right = [];
  for (let i = 1; i < b && i <= index && right.length < n / 2 - 1; i++) {
    if (i === a) continue;
    right.push(i);
  }
  right.push(b);
  //console.log(left, right);
  if (left.length + right.length < n) {
    console.log("-1");
    return;
  }
  console.log(left.concat(right).join(" "));
}
