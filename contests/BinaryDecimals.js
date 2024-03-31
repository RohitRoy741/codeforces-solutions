//Problem Link: https://codeforces.com/contest/1950/problem/D
let input = "";
process.stdin.on("data", (data) => (input += data));
process.stdin.on("end", () => {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  const t = +lines[0];
  let i = 1;
  const binaryDecimals = [];
  for (let j = 2; j <= 10 ** 5; j++) {
    if (isBinary(j.toString())) {
      binaryDecimals.push(j);
    }
  }
  while (i < lines.length) {
    const n = +lines[i++];
    solve(n, binaryDecimals);
  }
});

function solve(n, binaryDecimals) {
  //console.log(n, binaryDecimals);
  if (isBinary(n)) {
    console.log("YES");
    return;
  }
  while (reduce(n, binaryDecimals) !== n) {
    n = reduce(n, binaryDecimals);
  }
  if (n === 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function reduce(n, binaryDecimals) {
  for (let i = 0; i < binaryDecimals.length; i++) {
    if (n % binaryDecimals[i] === 0) {
      return n / binaryDecimals[i];
    }
  }
  return n;
}

function isBinary(n) {
  return /^[01]+$/.test(n);
}
