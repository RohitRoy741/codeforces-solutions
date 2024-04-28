// Problem Link: https://codeforces.com/problemset/problem/1932/B
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
  let prev = a[0];
  for (let i = 1; i < n; i++) {
    //console.log(prev, a[i]);
    let m = multiplier(prev / a[i]);
    //console.log(m);
    prev = a[i] * m;
  }
  console.log(prev);
}

function multiplier(x) {
  //console.log("Getting multiplier: ", x);
  if (Math.floor(x) === x) {
    return x + 1;
  } else {
    return Math.ceil(x);
  }
}
