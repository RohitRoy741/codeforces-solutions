// Problem Link: https://codeforces.com/problemset/problem/1873/E
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
    const [n, w] = lines[i++].split(" ").map(Number);
    const corals = lines[i++].split(" ").map(Number);
    solve(n, w, corals);
  }
});

function solve(n, w, corals) {
  corals.sort((a, b) => a - b);
  let water = [0];
  let coral = 0;
  for (let i = 1; i < n; i++) {
    let required = (corals[i] - corals[i - 1]) * i + water[i - 1];
    water.push(required);
    coral = i;
    if (required > w) {
      coral = i - 1;
      break;
    }
  }
  let currentHeight = corals[coral];
  let requiredWater = water[coral];
  let remainingWater = w - requiredWater;
  let afftectedCorals = coral + 1;
  let additionalHeight = Math.floor(remainingWater / afftectedCorals);
  currentHeight += additionalHeight;
  console.log(currentHeight);
}
