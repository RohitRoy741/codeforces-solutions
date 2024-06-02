// Problem Link: https://codeforces.com/problemset/problem/1839/B
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
    const n = +lines[i++];
    let lamps = [];
    for (let j = 0; j < n; j++) {
      let [a, b] = lines[i++].split(" ").map(Number);
      lamps.push({ a, b });
    }
    solve(n, lamps);
  }
});

function solve(n, lamps) {
  let seen = new Map();
  lamps.sort((lamp1, lamp2) => {
    if (lamp1.a < lamp2.a) {
      return -1;
    } else if (lamp1.a > lamp2.a) {
      return 1;
    } else {
      return lamp2.b - lamp1.b;
    }
  });
  //console.log(lamps);
  let points = 0;
  for (let i = 0; i < n; i++) {
    let current = lamps[i];
    let a = current.a;
    let b = current.b;
    if (!seen.has(a)) {
      seen.set(a, 1);
      points += b;
    } else {
      let value = seen.get(a);
      if (value >= a) {
        continue;
      } else {
        seen.set(a, value + 1);
        points += b;
      }
    }
  }
  console.log(points);
}
