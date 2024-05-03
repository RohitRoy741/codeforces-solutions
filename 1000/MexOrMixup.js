// Problem Link: https://codeforces.com/problemset/problem/1567/B
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
    const [mex, xor] = lines[i++].split(" ").map(Number);
    try {
      solve(mex, xor);
    } catch (error) {
      console.log(error);
    }
  }
});

function solve(mex, xor) {
  let value;
  let until = mex - 1;
  if (until % 4 === 0) {
    value = until;
  } else if (until % 4 === 1) {
    value = 1;
  } else if (until % 4 === 2) {
    value = until + 1;
  } else {
    value = 0;
  }
  if (value === xor) {
    console.log(mex);
  } else {
    if ((mex ^ value) === xor) {
      console.log(mex + 2);
    } else {
      console.log(mex + 1);
    }
  }
}
