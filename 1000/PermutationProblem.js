// Problem Link: https://codeforces.com/problemset/problem/1858/C
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
    solve(n);
  }
});

function solve(n) {
  let taken = Array(n).fill(false);
  let result = [];
  //console.log(taken);
  for (let i = 1; i <= n; i++) {
    // console.log("i: ", i);
    // console.log("Taken: ", taken);
    // console.log("Result: ", result);
    if (taken[i - 1]) {
      continue;
    }
    taken[i - 1] = true;
    result.push(i);
    let j = i;
    while (j * 2 <= n) {
      taken[j * 2 - 1] = true;
      result.push(j * 2);
      j *= 2;
    }
    // console.log("Taken: ", taken);
    // console.log("Result: ", result);
  }
  console.log(result.join(" "));
}
