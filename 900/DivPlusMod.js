// Problem Link: https://codeforces.com/problemset/problem/1650/B
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
    const [l, r, a] = lines[i++].split(" ").map(Number);
    //console.log(l, r, a);
    solve(l, r, a);
  }
});

function solve(l, r, a) {
  if (a > r) {
    console.log(r);
  } else if (r - (r % a) <= l) {
    console.log(Math.floor(r / a) + (r % a));
  } else {
    let value1 = Math.floor(r / a) + (r % a);
    let value2 = Math.floor(r / a) - 1 + (a - 1);
    console.log(Math.max(value1, value2));
  }
}
