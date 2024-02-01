// Problem Link: https://codeforces.com/problemset/problem/1900/A
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
    const arr = lines[i++].split("");
    solve(n, arr);
  }
});

function solve(n, arr) {
  let total = 0;
  let curr = 0;
  let max = 0;
  for (let valve of arr) {
    if (valve === ".") {
      curr++;
      total++;
    } else {
      max = Math.max(max, curr);
      curr = 0;
    }
  }
  max = Math.max(max, curr);
  if (max >= 3) {
    console.log(Math.min(2, total));
  } else {
    console.log(total);
  }
}
