// Problem Link: https://codeforces.com/problemset/problem/1829/D
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
    const [n, m] = lines[i++].split(" ").map(Number);
    solve(n, m);
  }
});

function solve(n, m) {
  if (n === m) {
    console.log("YES");
    return;
  }
  if (n % 3 !== 0) {
    console.log("NO");
    return;
  }

  let y = Math.floor(Math.log(n) / Math.log(3));

  for (let i = 1; i <= y; i++) {
    for (let j = 0; j <= i; j++) {
      let num = (Math.pow(2, j) * n) / Math.pow(3, i);
      if (num === m) {
        console.log("YES");
        return;
      }
    }
  }
  console.log("NO");
}
