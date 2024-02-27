// Problem Link: https://codeforces.com/problemset/problem/1860/A
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
    s = lines[i++];
    solve(s);
  }
});

function solve(s) {
  let s1 = "",
    s2 = "";
  for (let i = 0; i < s.length; i++) {
    s1 += "()";
    s2 += "(";
  }
  for (let i = 0; i < s.length; i++) {
    s2 += ")";
  }
  if (s1.includes(s) && s2.includes(s)) {
    console.log("NO");
  } else if (s1.includes(s)) {
    console.log("YES");
    console.log(s2);
  } else {
    console.log("YES");
    console.log(s1);
  }
}
