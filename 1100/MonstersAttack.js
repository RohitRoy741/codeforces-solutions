// Problem Link: https://codeforces.com/problemset/problem/1923/B
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
    const a = lines[i++].split(" ").map(Number);
    const x = lines[i++].split(" ").map(Number);
    solve(n, k, a, x);
  }
});

function solve(n, k, a, x) {
  let monsters = [];
  for (let i = 0; i < n; i++) {
    let monster = {
      health: a[i],
      position: x[i],
    };
    monsters.push(monster);
  }
  monsters.sort((a, b) => Math.abs(a.position) - Math.abs(b.position));
  let extra = 0;
  let turns = 0;
  for (let i = 0; i < n; i++) {
    let distance = Math.abs(monsters[i].position) - turns;
    let total = monsters[i].health - extra;
    extra = Math.max(0, extra - monsters[i].health);
    if (total <= 0) {
      continue;
    }
    let required = Math.ceil(total / k);
    if (required > distance) {
      console.log("NO");
      return;
    }
    turns += required;
    extra = k * required - total;
  }
  console.log("YES");
}
