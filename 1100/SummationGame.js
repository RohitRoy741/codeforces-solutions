// Problem Link: https://codeforces.com/problemset/problem/1920/B
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
    const [n, k, x] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, x, a);
  }
});

function solve(n, k, x, a) {
  a.sort((x, y) => x - y);
  let positives = a.slice(0, n - x).reduce((acc, element) => acc + element, 0);
  let negatives = a.slice(n - x).reduce((acc, element) => acc + element, 0);
  //console.log(positives, negatives);
  let sum = positives - negatives;
  //console.log(sum);
  let max = sum;
  let p1 = n - x - 1;
  let p2 = n - 1;
  for (let i = 0; i < k; i++) {
    //console.log("P1", p1, "P2", p2);
    //console.log("initial", positives, negatives);
    if (p1 < 0) {
      positives = 0;
    } else {
      positives = positives - a[p1];
    }
    if (p1 < 0 && p2 < 0) {
      negatives = 0;
    } else if (p1 < 0) {
      negatives = negatives - a[p2];
    } else {
      negatives = negatives + a[p1] - a[p2];
    }
    //console.log("Positives", positives, "Negatives", negatives);
    sum = positives - negatives;
    //console.log("Sum", sum);
    p1--;
    p2--;
    max = Math.max(max, sum);
  }
  console.log(max);
}
