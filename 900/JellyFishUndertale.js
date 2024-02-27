//Problem Link: https://codeforces.com/problemset/problem/1875/A
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
    const [a, b, n] = lines[i++].split(" ").map(Number);
    const tools = lines[i++].split(" ").map(Number);
    solve(a, b, n, tools);
  }
});

function solve(a, b, n, tools) {
  let ans = b;
  let count = 0;
  for (let tool of tools) {
    if (tool >= a) {
      count++;
    }
    ans += Math.min(tool, a);
  }
  console.log(ans - count);
}
