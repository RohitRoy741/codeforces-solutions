// Problem Link: https://codeforces.com/problemset/problem/1783/B
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
    solve(n);
  }
});

function solve(n) {
  let p1 = 1;
  let p2 = n * n;
  let current = 0;
  let result = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (current === 0) {
        row.push(p1);
        p1++;
        current = 1;
      } else {
        row.push(p2);
        p2--;
        current = 0;
      }
    }
    if (i % 2 === 1) {
      row.reverse();
    }
    result.push(row);
  }
  for (let i = 0; i < n; i++) {
    console.log(result[i].join(" "));
  }
}
