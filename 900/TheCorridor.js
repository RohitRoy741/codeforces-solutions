// Problem Link: https://codeforces.com/problemset/problem/1872/B
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
    let n = +lines[i++];
    const traps = [];
    while (n--) {
      const [d, s] = lines[i++].split(" ").map(Number);
      traps.push({ loc: d, time: s });
    }
    solve(traps);
  }
});

function solve(traps) {
  let min = Infinity;
  for (let trap of traps) {
    if (trap.time % 2 === 1) {
      trap.time++;
    }
    loc = trap.loc + trap.time / 2 - 1;
    min = Math.min(min, loc);
  }
  console.log(min);
}
