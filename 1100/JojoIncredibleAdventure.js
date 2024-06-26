// Problem Link: https://codeforces.com/problemset/problem/1820/B
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
    const s = lines[i++].split("").map(Number);
    solve(s);
  }
});

function solve(s) {
  let n = s.length;
  let longest = 0;
  let current = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === 0) {
      longest = Math.max(current, longest);
      current = 0;
    } else {
      current++;
    }
  }
  if (s[n - 1] === 1) {
    let i = 0;
    while (s[i] === 1 && i < n - 1) {
      current++;
      i++;
    }
    longest = Math.max(current, longest);
  }
  //console.log(longest);
  if (longest % 2 === 1) {
    console.log(Math.ceil(longest / 2) * Math.ceil(longest / 2));
  } else {
    console.log((longest / 2) * (longest / 2 + 1));
  }
}
