// Problem Link: https://codeforces.com/problemset/problem/1969/B
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
    const string = lines[i++].split("");
    solve(string);
  }
});

function solve(string) {
  let zeroIndex = 1;
  let sum = 0;
  for (let i = 1; i <= string.length; i++) {
    if (string[i - 1] === "0") {
      let difference = i - zeroIndex;
      if (difference > 0) {
        difference++;
      }
      sum += difference;
      zeroIndex++;
    }
  }
  console.log(sum);
}
