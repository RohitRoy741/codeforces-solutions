// Problem Link: https://codeforces.com/problemset/problem/1976/A
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
  //console.log(n, s);
  let i = 0;
  let prev = -Infinity;
  while (i < n && isDigit(s[i])) {
    if (Number(s[i]) < prev) {
      console.log("NO");
      return;
    }
    prev = Number(s[i]);
    i++;
  }
  prev = "a";
  while (i < n) {
    if (!isLetter(s[i]) || s[i] < prev) {
      console.log("NO");
      return;
    }
    prev = s[i];
    i++;
  }
  console.log("YES");
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}
