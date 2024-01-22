// Problem Link: https://codeforces.com/problemset/problem/1919/A

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
    const [a, b] = lines[i++].split(" ").map(Number);
    solve(a, b);
  }
});

function solve(a, b) {
  if ((a + b) % 2 === 0) {
    console.log("Bob");
  } else {
    console.log("Alice");
  }
}
