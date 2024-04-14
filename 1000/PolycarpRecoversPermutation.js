// Problem Link: https://codeforces.com/problemset/problem/1611/C
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
    const p = lines[i++].split(" ").map(Number);
    solve(n, p);
  }
});

function solve(n, p) {
  let maxIndex = p.findIndex((element) => element === n);
  if (maxIndex !== 0 && maxIndex !== n - 1) {
    console.log(-1);
    return;
  }
  let initial = [n];
  let arr = [];
  if (maxIndex === 0) {
    arr = p.slice(1);
  } else {
    arr = p.slice(0, n - 1);
  }
  let result = initial.concat(arr.reverse());
  console.log(result.join(" "));
}
