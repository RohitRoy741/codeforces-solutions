// Problem Link: https://codeforces.com/problemset/problem/1869/B
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
    const [n, k, a, b] = lines[i++].split(" ").map(Number);
    let cities = [];
    for (let j = 0; j < n; j++) {
      let [x, y] = lines[i++].split(" ").map(Number);
      cities.push([x, y]);
    }
    solve(n, k, a, b, cities);
  }
});

function solve(n, k, a, b, cities) {
  a--;
  b--;
  let d1 = Infinity;
  let d2 = Infinity;
  let d3 =
    Math.abs(cities[a][0] - cities[b][0]) +
    Math.abs(cities[a][1] - cities[b][1]);
  for (let i = 0; i < k; i++) {
    let distanceA =
      Math.abs(cities[i][0] - cities[a][0]) +
      Math.abs(cities[i][1] - cities[a][1]);
    d1 = Math.min(d1, distanceA);
    let distanceB =
      Math.abs(cities[i][0] - cities[b][0]) +
      Math.abs(cities[i][1] - cities[b][1]);
    d2 = Math.min(d2, distanceB);
  }
  if (d1 + d2 < d3) {
    console.log(d1 + d2);
  } else {
    console.log(d3);
  }
}
