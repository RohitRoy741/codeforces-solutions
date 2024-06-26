// Problem Link: https://codeforces.com/problemset/problem/1974/B
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
  let set = new Set(s);
  let letters = Array.from(set).sort();
  let reverseLetters = letters.slice().reverse();
  let result = "";
  for (let i = 0; i < n; i++) {
    let char = s[i];
    let index = letters.indexOf(char);
    let reverseChar = reverseLetters[index];
    result += reverseChar;
  }
  console.log(result);
}
