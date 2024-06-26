// Problem Link: https://codeforces.com/problemset/problem/1821/B
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
    const a = lines[i++].split(" ").map(Number);
    const b = lines[i++].split(" ").map(Number);
    solve(n, a, b);
  }
});

function solve(n, a, b) {
  let longestSorted = Array(n).fill(1);
  let endingIndex = 1;
  let max = 1;
  let firstDifferent = -1;
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      firstDifferent = i;
      break;
    }
  }
  for (let i = 1; i < n; i++) {
    if (b[i] >= b[i - 1]) {
      longestSorted[i] = longestSorted[i - 1] + 1;
      //   console.log(
      //     "i:",
      //     i,
      //     "longestSorted[i]:",
      //     longestSorted[i],
      //     "max:",
      //     max,
      //     "endingIndex:",
      //     endingIndex,
      //     "firstDifferent:",
      //     firstDifferent
      //   );
      if (
        firstDifferent !== -1 &&
        i - longestSorted[i] + 1 <= firstDifferent &&
        i >= firstDifferent
      ) {
        if (longestSorted[i] > max) {
          max = longestSorted[i];
          endingIndex = i;
        }
      }
    }
  }
  //   console.log("Longest Sorted:", longestSorted);
  console.log(endingIndex + 2 - max, endingIndex + 1);
}
