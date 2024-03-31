//Problem Link: https://codeforces.com/problemset/problem/1704/B
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
    const [n, x] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, x, a);
  }
});

function solve(n, x, a) {
  let choices = [];
  let changes = 0;
  choices = choicesArray(a[0], x);
  for (let i = 1; i < n; i++) {
    let c = choicesArray(a[i], x);
    let intersection = arrayIntersection(choices, c);
    if (intersection.length === 0) {
      changes++;
      choices = c;
    } else {
      choices = intersection;
    }
  }
  console.log(changes);
}

function arrayIntersection(a, b) {
  if (a[0] > b[1] || a[1] < b[0]) {
    return [];
  } else {
    return [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
  }
}

function choicesArray(element, x) {
  return [element - x, element + x];
}
