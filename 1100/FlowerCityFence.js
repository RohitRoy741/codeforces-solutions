// Problem Link: https://codeforces.com/problemset/problem/1862/C
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
  for (let i = 0; i < n; i++) {
    let minimumHeight = i + 1;
    let index = a[i];
    // console.log("Index", index);
    // console.log("Minimum Height", minimumHeight);
    // console.log("a[index]", a[index - 1]);
    if (!a[index - 1] || a[index - 1] < minimumHeight) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
