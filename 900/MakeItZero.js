// Problem Link: https://codeforces.com/problemset/problem/1869/A
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
  if (n % 2 === 0) {
    console.log("2");
    console.log(`1 ${n}`);
    console.log(`1 ${n}`);
  } else {
    console.log("4");
    console.log(`1 ${n - 1}`);
    console.log(`1 ${n - 1}`);
    console.log(`${n - 1} ${n}`);
    console.log(`${n - 1} ${n}`);
  }
}
