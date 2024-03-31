//Problem Link: https://codeforces.com/problemset/problem/1809/B
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
    const n = BigInt(lines[i++]);
    solve(n);
  }
});

function solve(n) {
  let result = sqrt(n);
  if (result * result === n) {
    console.log(String(result - 1n));
  } else {
    console.log(String(result));
  }
  //   if (result === Math.floor(result)) {
  //     console.log(result - 1);
  //   } else {
  //     console.log(Math.floor(result));
  //   }
}

function sqrt(value) {
  if (value < 0n) {
    throw "square root of negative numbers is not supported";
  }

  if (value < 2n) {
    return value;
  }

  function newtonIteration(n, x0) {
    const x1 = (n / x0 + x0) >> 1n;
    if (x0 === x1 || x0 === x1 - 1n) {
      return x0;
    }
    return newtonIteration(n, x1);
  }

  return newtonIteration(value, 1n);
}
