//Problem Link: https://codeforces.com/problemset/problem/1915/D
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
    const s = lines[i++];
    solve(n, s);
  }
});

function solve(n, s) {
  let result = "";
  let i = 0;
  while (i < n) {
    if (i + 3 >= n) {
      result += s.slice(i);
      i += 3;
    } else if (isConsonant(s[i + 3])) {
      result += s[i] + s[i + 1] + s[i + 2] + ".";
      i += 3;
    } else {
      result += s[i] + s[i + 1] + ".";
      i += 2;
    }
  }
  console.log(result);
}

function isConsonant(ch) {
  return "bcd".includes(ch);
}
