// Problem Link: https://codeforces.com/problemset/problem/1634/C
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
    const [n, k] = lines[i++].split(" ").map(Number);
    solve(n, k);
  }
});

function solve(n, k) {
  const total = n * k;
  let odds = Math.ceil(total / 2);
  let evens = Math.floor(total / 2);
  if (odds % k !== 0 || evens % k !== 0) {
    console.log("NO");
    return;
  }
  console.log("YES");
  let i = 1;
  let result = [];
  while (i <= n * k) {
    let row = [];
    for (let j = 1; j <= k; j++) {
      row.push(i);
      i += 2;
    }
    result.push(row);
  }
  i = 2;
  while (i <= n * k) {
    let row = [];
    for (let j = 1; j <= k; j++) {
      row.push(i);
      i += 2;
    }
    result.push(row);
  }
  for (let row of result) {
    console.log(row.join(" "));
  }
}
