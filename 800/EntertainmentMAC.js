// Problem Link: https://codeforces.com/problemset/problem/1935/A
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
  let reverse = string.split("").reverse().join("");
  if (string <= reverse) {
    console.log(string);
  } else if (reverse < string) {
    console.log(reverse + string);
  }
}
