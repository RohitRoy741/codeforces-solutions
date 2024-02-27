// Problem Link: https://codeforces.com/problemset/problem/1613/A
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
    let [x1, p1] = lines[i++].split(" ").map(Number);
    let [x2, p2] = lines[i++].split(" ").map(Number);
    solve(x1, p1, x2, p2);
  }
});

function solve(x1, p1, x2, p2) {
  let min = Math.min(p1, p2);
  p1 = p1 - min;
  p2 = p2 - min;
  if (p1 === 0 && p2 === 0) {
    if (x1 > x2) {
      console.log(">");
    } else if (x1 < x2) {
      console.log("<");
    } else {
      console.log("=");
    }
  } else if (p1 === 0) {
    if (isFinite(x2 * Math.pow(10, p2))) {
      x2 = x2 * Math.pow(10, p2);
      if (x1 > x2) {
        console.log(">");
      } else if (x1 < x2) {
        console.log("<");
      } else {
        console.log("=");
      }
    } else {
      console.log("<");
    }
  } else if (p2 === 0) {
    if (isFinite(x1 * Math.pow(10, p1))) {
      x1 = x1 * Math.pow(10, p1);
      if (x1 > x2) {
        console.log(">");
      } else if (x1 < x2) {
        console.log("<");
      } else {
        console.log("=");
      }
    } else {
      console.log(">");
    }
  }
}

function digits(n) {
  return n.toString().length;
}
