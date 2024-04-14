// Problem Link: https://codeforces.com/problemset/problem/1948/A
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
  if (n % 2 === 1) {
    console.log("NO");
    return;
  }
  let str = "";
  for (let i = 0; i < n; i += 2) {
    str += "AAB";
  }
  console.log("YES");
  console.log(str);
}
