// Problem Link: https://codeforces.com/problemset/problem/1834/B
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
    const [n, m] = lines[i++].split(" ");
    solve(n, m);
  }
});

function solve(n, m) {
  let diff = m.length - n.length;
  n = Array(diff).fill(0).join("") + n;
  let ans = 0;
  for (let i = 0; i < n.length; i++) {
    if (+m[i] > +n[i]) {
      ans += +m[i] - +n[i];
      ans += 9 * (n.length - i - 1);
      break;
    }
  }
  console.log(ans);
}
