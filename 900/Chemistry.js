//Problem Link: https://codeforces.com/problemset/problem/1883/B
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const string = lines[i++];
    solve(n, k, string);
  }
});

function solve(n, k, string) {
  let freq = new Map();
  for (let ch of string) {
    if (freq.has(ch)) {
      freq.set(ch, freq.get(ch) + 1);
    } else {
      freq.set(ch, 1);
    }
  }
  let odd = 0;
  for (let value of freq.values()) {
    if (value % 2 !== 0) {
      odd++;
    }
  }
  let minDelete = odd - 1;
  if (minDelete > k) {
    console.log("NO");
    return;
  }
  console.log("YES");
}
