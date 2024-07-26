// Problem Link: https://codeforces.com/problemset/problem/1992/A
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
    const [a, b, c] = lines[i++].split(" ").map(Number);
    solve(a, b, c);
  }
});

function solve(a, b, c) {
  for (let i = 0; i < 5; i++) {
    if (a <= b) {
      if (a <= c) {
        a++;
      } else {
        c++;
      }
    } else {
      if (b <= c) {
        b++;
      } else {
        c++;
      }
    }
  }
  console.log(a * b * c);
}
