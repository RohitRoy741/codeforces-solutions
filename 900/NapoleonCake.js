// Problem Link: https://codeforces.com/problemset/problem/1501/B
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
  let drenched = new Array(n).fill(0);
  let fromIndices = [];
  let toIndices = [];
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) continue;
    let from = i - a[i] + 1 > 0 ? i - a[i] + 1 : 0;
    fromIndices.push(from);
    let to = i;
    toIndices.push(to);
  }
  fromIndices.sort((a, b) => a - b);
  fromIndices.push(Infinity);
  toIndices.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < n && index < n; i++) {
    while (index < n && fromIndices[index] < i && toIndices[index] < i) {
      index++;
    }
    if (fromIndices[index] > i) {
      drenched[i] = 0;
    } else {
      drenched[i] = 1;
    }
  }
  console.log(drenched.join(" "));
}
