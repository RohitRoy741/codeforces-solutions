// Problem Link: https://codeforces.com/problemset/problem/1984/A
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
  if (a[0] === a[n - 1]) {
    console.log("NO");
    return;
  }
  console.log("YES");
  let s = "";
  if (a[1] !== a[n - 1]) {
    s = "R" + "B".repeat(n - 1);
  } else {
    s = "B" + "R" + "B".repeat(n - 2);
  }
  console.log(s);
}
