// Problem Link: https://codeforces.com/problemset/problem/1837/C
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
    const s = lines[i++];
    solve(s);
  }
});

function solve(s) {
  let prev = "0";
  let result = [];
  for (let char of s) {
    if (char === "?") {
      if (prev === "0") {
        result.push("0");
      } else {
        result.push("1");
      }
    } else {
      result.push(char);
      prev = char;
    }
  }
  console.log(result.join(""));
}
