// Problem Link: https://codeforces.com/problemset/problem/1925/A
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
    solve(n, k);
  }
});

function solve(n, k) {
  let arr = new Array(26).fill(0);
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    arr[i - "a".charCodeAt(0)] = String.fromCharCode(i);
  }
  let str = arr.slice(0, k).join("");
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += str;
  }
  console.log(ans);
}
