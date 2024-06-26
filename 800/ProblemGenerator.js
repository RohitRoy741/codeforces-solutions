// Problem Link: https://codeforces.com/problemset/problem/1980/A
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
    const [n, m] = lines[i++].split(" ").map(Number);
    const problems = lines[i++].split("");
    solve(n, m, problems);
  }
});

function solve(n, m, problems) {
  let map = new Map();
  map.set("A", 0);
  map.set("B", 0);
  map.set("C", 0);
  map.set("D", 0);
  map.set("E", 0);
  map.set("F", 0);
  map.set("G", 0);
  for (let i = 0; i < n; i++) {
    map.set(problems[i], map.get(problems[i]) + 1);
  }
  //console.log(map);
  let required = 0;
  for (let [problem, count] of map.entries()) {
    if (count < m) {
      required += m - count;
    }
  }
  console.log(required);
}
