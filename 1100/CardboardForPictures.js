// Problem Link: https://codeforces.com/problemset/problem/1850/E
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
    const [n, cardboard] = lines[i++].split(" ").map(BigInt);
    const array = lines[i++].split(" ").map(BigInt);
    solve(n, cardboard, array);
  }
});

function solve(n, cardboard, array) {
  let a = 4n * n;
  let b = 0n;
  let c = 0n;
  for (let i = 0; i < Number(n); i++) {
    b += 2n * 2n * BigInt(array[i]);
    c += BigInt(array[i]) * BigInt(array[i]);
    // console.log(array[i]);
  }
  c -= cardboard;
  const d = sqrtBigInt(b * b - 4n * a * c);
  const ans = (d - b) / (2n * a);
  console.log(ans.toString());
}

function sqrtBigInt(n) {
  if (n < 2n) {
    return n;
  }

  function newtonIteration(n, x0) {
    const x1 = (n / x0 + x0) >> 1n;
    if (x0 === x1 || x0 === x1 - 1n) {
      return x0;
    }
    return newtonIteration(n, x1);
  }

  return newtonIteration(n, 1n);
}
