// Problem Link: https://codeforces.com/problemset/problem/1863/C
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, a);
  }
});

function solve(n, k, a) {
  let b = a.slice();
  b.sort((x, y) => x - y);
  let missing = -1;
  for (let i = 0; i < n; i++) {
    if (b[i] !== i) {
      missing = i;
      break;
    }
  }
  if (missing === -1) {
    missing = n;
  }
  //console.log("Missing: ", missing);
  k = k % (n + 1);
  if (k === 0) {
    console.log(a.join(" "));
    return;
  }
  let index = k - 1;
  let first = a.slice(n - index);
  let last = a.slice(0, n - index - 1);
  let ans = [...first, missing, ...last];
  console.log(ans.join(" "));
}
