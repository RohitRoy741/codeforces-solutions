// Problem Link: https://codeforces.com/problemset/problem/1480/B
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
    const [A, B, n] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(A, B, n, a, b);
  }
});

function solve(A, B, n, a, b) {
  let monsters = [];
  for (let i = 0; i < n; i++) {
    monsters.push({ attack: a[i], health: b[i] });
  }
  monsters.sort((monster1, monster2) => {
    const impact1 = Math.ceil(monster1.health / A) * monster1.attack;
    const impact2 = Math.ceil(monster2.health / A) * monster2.attack;
    return impact1 - impact2;
  });
  for (let i = 0; i < n; i++) {
    if (B <= 0) {
      console.log("NO");
      return;
    }
    let fights = Math.ceil(monsters[i].health / A);
    let impact = fights * monsters[i].attack;
    B -= impact;
    if (B < 0 && Math.abs(B) >= monsters[i].attack) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
