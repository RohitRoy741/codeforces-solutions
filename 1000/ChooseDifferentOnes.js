// Problem Link: https://codeforces.com/problemset/problem/1927/C
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
    const [n, m, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, m, k, a, b);
  }
});

function solve(n, m, k, a, b) {
  const aSet = new Set(a);
  const bSet = new Set(b);
  let aCount = 0;
  let bCount = 0;
  let commonCount = 0;
  for (let i = 1; i <= k; i++) {
    if (!aSet.has(i) && !bSet.has(i)) {
      console.log("NO");
      return;
    }

    if (aSet.has(i) && !bSet.has(i)) {
      aCount++;
    } else if (!aSet.has(i) && bSet.has(i)) {
      bCount++;
    } else {
      commonCount++;
    }
  }
  //console.log(aCount, bCount, commonCount);
  if (aCount > k / 2 || bCount > k / 2) {
    console.log("NO");
    return;
  }
  console.log("YES");
}
