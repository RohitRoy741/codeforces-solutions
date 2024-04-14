// Problem Link: https://codeforces.com/problemset/problem/1614/B
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
  let values = [];
  for (let i = 0; i < n; i++) {
    values.push([a[i], i]);
  }
  values.sort((a, b) => b[0] - a[0]);
  let index1 = 1,
    index2 = -1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      values[i] = [values[i][0], values[i][1], index1];
      index1++;
    } else {
      values[i] = [values[i][0], values[i][1], index2];
      index2--;
    }
  }
  values.sort((a, b) => a[1] - b[1]);
  let result = [0];
  for (let i = 0; i < n; i++) {
    result.push(values[i][2]);
  }
  let distance = 0;
  for (let i = 0; i < n; i++) {
    distance += Math.abs(values[i][2]) * 2 * values[i][0];
  }
  console.log(distance);
  console.log(result.join(" "));
}
