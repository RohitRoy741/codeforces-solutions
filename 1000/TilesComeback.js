// Problem Link: https://codeforces.com/problemset/problem/1851/C
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
    const c = lines[i++].split(" ").map(Number);
    solve(n, k, c);
  }
});

function solve(n, k, c) {
  if (c[0] === c[n - 1]) {
    let count = c.filter((color) => color === c[0]).length;
    if (count >= k) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  } else {
    let firstCount = 0;
    let index;
    for (let i = 0; i < n; i++) {
      if (c[i] === c[0]) {
        firstCount++;
      }
      if (firstCount === k) {
        index = i;
        break;
      }
    }
    if (firstCount < k) {
      console.log("NO");
      return;
    }
    let lastCount = c
      .slice(index + 1)
      .filter((color) => color === c[n - 1]).length;
    if (lastCount >= k) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
