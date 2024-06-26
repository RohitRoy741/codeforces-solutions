// Problem Link: https://codeforces.com/problemset/problem/1980/B
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
    const [n, f, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, f, k, a);
  }
});

function solve(n, f, k, a) {
  let choosen = a[f - 1];
  let flag = false;
  a.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    if (a[i] === choosen) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    console.log("NO");
  } else if (k < n && a[k] === choosen) {
    console.log("MAYBE");
  } else {
    console.log("YES");
  }
}
