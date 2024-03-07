// Problem Link: https://codeforces.com/problemset/problem/1913/B
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
  let zeroes = 0;
  let ones = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      zeroes++;
    } else {
      ones++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      if (ones === 0) {
        console.log(s.length - i);
        return;
      } else {
        ones--;
      }
    } else if (s[i] === "1") {
      if (zeroes === 0) {
        console.log(s.length - i);
        return;
      } else {
        zeroes--;
      }
    }
  }
  console.log(0);
}
