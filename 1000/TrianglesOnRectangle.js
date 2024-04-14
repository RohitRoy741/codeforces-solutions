// Problem Link: https://codeforces.com/problemset/problem/1620/B
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
    const [w, h] = lines[i++].split(" ").map(Number);
    const x1 = lines[i++].split(" ").map(Number);
    const x2 = lines[i++].split(" ").map(Number);
    const y1 = lines[i++].split(" ").map(Number);
    const y2 = lines[i++].split(" ").map(Number);
    solve(w, h, x1, x2, y1, y2);
  }
});

function solve(w, h, x1, x2, y1, y2) {
  let x1Min = x1[1];
  let x1Max = x1[x1[0]];
  //console.log(x1Min, x1Max);
  let area1 = (x1Max - x1Min) * h;
  //console.log(area1);
  let x2Min = x2[1];
  let x2Max = x2[x2[0]];
  //console.log(x2Min, x2Max);
  let area2 = (x2Max - x2Min) * h;
  //console.log(area2);
  let y1Min = y1[1];
  let y1Max = y1[y1[0]];
  //console.log(y1Min, y1Max);
  let area3 = (y1Max - y1Min) * w;
  //console.log(area3);
  let y2Min = y2[1];
  let y2Max = y2[y2[0]];
  //console.log(y2Min, y2Max);
  let area4 = (y2Max - y2Min) * w;
  //console.log(area4);
  console.log(Math.max(area1, area2, area3, area4));
}
