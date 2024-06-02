// Problem Link: https://codeforces.com/problemset/problem/1864/B
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
  if (k % 2 === 0) {
    string = string.split("").sort().join("");
    console.log(string);
    return;
  }
  let evens = [];
  let odds = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      evens.push(string[i]);
    } else {
      odds.push(string[i]);
    }
  }
  evens.sort();
  odds.sort();
  let result = "";
  for (let i = 0; i < Math.floor(n / 2); i++) {
    result += evens[i] + odds[i];
  }
  if (n % 2 === 1) {
    result += evens[evens.length - 1];
  }
  console.log(result);
}
