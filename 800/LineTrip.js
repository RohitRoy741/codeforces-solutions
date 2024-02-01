// Problem Link: https://codeforces.com/problemset/problem/1901/A
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
    const [n, x] = lines[i++].split(" ").map(Number);
    const array = lines[i++].split(" ").map(Number);
    solve(n, x, array);
  }
});

function solve(n, x, array) {
  let maxDistance = 0;
  let prev = 0;
  for (let num of array) {
    maxDistance = Math.max(maxDistance, num - prev);
    prev = num;
  }
  let lastDistance = (x - array[array.length - 1]) * 2;
  maxDistance = Math.max(maxDistance, lastDistance);
  console.log(maxDistance);
}
