// Problem Link: https://codeforces.com/problemset/problem/1933/C
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
    const [a, b, l] = lines[i++].split(" ").map(Number);
    solve(a, b, l);
  }
});

function solve(a, b, l) {
  let values = new Set();
  for (let x = 0; Math.pow(a, x) <= l; x++) {
    let remaining = l / Math.pow(a, x);
    if (remaining !== Math.floor(remaining)) continue;
    for (let y = 0; Math.pow(b, y) <= l; y++) {
      let k = l / (Math.pow(a, x) * Math.pow(b, y));
      if (k !== Math.floor(k)) continue;
      values.add(k);
    }
  }
  console.log(values.size);
}
