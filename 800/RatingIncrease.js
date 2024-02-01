// Problem Link: https://codeforces.com/problemset/problem/1913/A
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
    const ratings = lines[i++];
    solve(ratings);
  }
});

function solve(ratings) {
  let i = 1;
  while (i < ratings.length && ratings[i] === "0") {
    i++;
  }
  let a = +ratings.slice(0, i);
  let b = +ratings.slice(i);
  if (a >= b) {
    console.log(-1);
  } else {
    console.log(a, b);
  }
}
