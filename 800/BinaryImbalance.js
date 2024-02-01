//Problem Imbalance: https://codeforces.com/problemset/problem/1902/A
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
    const string = lines[i++];
    solve(n, string);
  }
});

function solve(n, string) {
  if (string.includes("0")) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
