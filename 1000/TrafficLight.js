// Problem Link: https://codeforces.com/problemset/problem/1744/C
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
    let [n, c] = lines[i++].split(" ");
    n = +n;
    s = lines[i++];
    solve(n, c, s);
  }
});

function solve(n, c, s) {
  if (c === "g") {
    console.log(0);
    return;
  }
  let max = -Infinity;
  let i = 0;
  while (i < n) {
    if (s[i] !== c) {
      i++;
      continue;
    }
    let j = i;
    let count = 0;
    while (s[j] !== "g") {
      count++;
      if (s[j] === c) {
        s[j] = "X";
      }
      j = (j + 1) % n;
    }
    max = Math.max(max, count);
    if (j < i) {
      break;
    }
    i = j;
  }
  console.log(max);
}
