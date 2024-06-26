// Problem Link: https://codeforces.com/problemset/problem/1838/B
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
    const n = +lines[i++];
    const p = lines[i++].split(" ").map(Number);
    solve(n, p);
  }
});

function solve(n, p) {
  let oneIndex = -1;
  let twoIndex = -1;
  let nIndex = -1;
  for (let i = 0; i < n; i++) {
    if (p[i] === 1) {
      oneIndex = i;
    } else if (p[i] === 2) {
      twoIndex = i;
    } else if (p[i] === n) {
      nIndex = i;
    }
  }
  if (nIndex > oneIndex && nIndex < twoIndex) {
    console.log("1 1");
    return;
  }
  if (nIndex < oneIndex && nIndex > twoIndex) {
    console.log("1 1");
    return;
  }
  let min = Math.min(oneIndex, twoIndex);
  let max = Math.max(oneIndex, twoIndex);
  if (max - min > 1) {
    console.log(`${min + 2} ${nIndex + 1}`);
  } else {
    if (nIndex > max) {
      console.log(`${max + 1} ${nIndex + 1}`);
    } else {
      console.log(`${min + 1} ${nIndex + 1}`);
    }
  }
}
