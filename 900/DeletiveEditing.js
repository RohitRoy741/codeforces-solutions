// Problem Link: https://codeforces.com/problemset/problem/1666/D
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
    const [s, t] = lines[i++].split(" ");
    solve(s, t);
  }
});

function solve(s, t) {
  s = s.split("");
  t = t.split("").reverse().join("");
  let min = s.length + 1;
  for (let char of t) {
    let index = s.lastIndexOf(char);
    if (index === -1 || index > min) {
      console.log("NO");
      return;
    }
    min = index;
    s[min] = "0";
  }
  console.log("YES");
}
