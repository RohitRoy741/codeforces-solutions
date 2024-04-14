// Problem Link: https://codeforces.com/problemset/problem/1690/D
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split("");
    solve(n, k, a);
  }
});

function solve(n, k, a) {
  //   console.log(a);
  let window = a.slice(0, k);

  //   console.log("Window: ", window);
  let w = window.filter((element) => element === "W").length;
  //   console.log("Cost: ", w);
  let min = w;
  let start = 1,
    end = k;
  while (end < n) {
    if (a[start - 1] === "W") w--;
    if (a[end] === "W") w++;
    // console.log("Window: ", a.slice(start, end + 1));
    // console.log("Cost: ", w);
    min = Math.min(min, w);
    start++;
    end++;
  }
  console.log(min);
}
