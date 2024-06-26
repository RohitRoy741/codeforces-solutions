// Problem Link: https://codeforces.com/problemset/problem/1975/A
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
  let decreaseIndex = -1;
  let prev = -Infinity;
  for (let i = 0; i < n; i++) {
    if (a[i] < prev) {
      decreaseIndex = i;
      break;
    }
    prev = a[i];
  }

  if (decreaseIndex === -1) {
    console.log("YES");
    return;
  }
  let prefix = a.slice(0, decreaseIndex);
  let suffix = a.slice(decreaseIndex);
  let result = [...suffix, ...prefix];
  for (let i = 1; i < n; i++) {
    if (result[i] < result[i - 1]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
