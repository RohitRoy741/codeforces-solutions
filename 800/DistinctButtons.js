// Problem Link: https://codeforces.com/problemset/problem/1909/A
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
    let points = [];
    let j = 0;
    while (j++ < n) {
      const point = lines[i++].split(" ").map(Number);
      points.push(point);
    }
    solve(n, points);
  }
});

function solve(n, points) {
  let R = false,
    L = false,
    U = false,
    D = false;
  for (let point of points) {
    if (point[0] > 0) {
      R = true;
    } else if (point[0] < 0) {
      L = true;
    }
    if (point[1] > 0) {
      U = true;
    } else if (point[1] < 0) {
      D = true;
    }
  }
  if (L && R && U && D) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
