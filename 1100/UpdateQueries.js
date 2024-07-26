// Problem Link: https://codeforces.com/problemset/problem/1986/C
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
    const [n, m] = lines[i++].split(" ").map(Number);
    const s = lines[i++];
    const indexes = lines[i++].split(" ").map(Number);
    const c = lines[i++];
    solve(n, m, s, indexes, c);
  }
});

function solve(n, m, s, indexes, c) {
  s = s.split("");
  let set = new Set(indexes);
  indexes = Array.from(set).sort((a, b) => a - b);
  c = c.split("").sort().join("");
  for (let i = 0; i < indexes.length; i++) {
    s[indexes[i] - 1] = c[i];
  }
  console.log(s.join(""));
}
