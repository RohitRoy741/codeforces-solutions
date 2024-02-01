// Problem Link: https://codeforces.com/problemset/problem/1904/A
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
    const [a, b] = lines[i++].split(" ").map(Number);
    const [x1, y1] = lines[i++].split(" ").map(Number);
    const [x2, y2] = lines[i++].split(" ").map(Number);
    solve(a, b, x1, y1, x2, y2);
  }
});

function solve(a, b, x1, y1, x2, y2) {
  let points = [
    [x1 - a, y1 - b],
    [x1 - a, y1 + b],
    [x1 + a, y1 - b],
    [x1 + a, y1 + b],
    [x1 - b, y1 - a],
    [x1 - b, y1 + a],
    [x1 + b, y1 - a],
    [x1 + b, y1 + a],
  ];
  let possible = [points[0]];
  for (let i = 1; i < 8; i++) {
    if (
      points
        .slice(0, i - 1)
        .filter(
          (point) => point[0] === points[i][0] && point[1] === points[i][1]
        ).length === 0
    ) {
      possible.push(points[i]);
    }
  }
  let answer = 0;
  for (let point of possible) {
    if (Math.abs(point[0] - x2) === a && Math.abs(point[1] - y2) === b) {
      answer++;
    } else if (Math.abs(point[0] - x2) === b && Math.abs(point[1] - y2) === a) {
      answer++;
    }
  }
  console.log(answer);
}
