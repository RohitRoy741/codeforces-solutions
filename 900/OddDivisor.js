// Problem Link: https://codeforces.com/problemset/problem/1475/A
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
    solution(n);
  }
});

function solution(n) {
  while (n % 2 === 0) {
    n = n / 2;
  }
  if (n === 1) {
    console.log("NO");
    return;
  }
  console.log("YES");
}
