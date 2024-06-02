// Problem Link: https://codeforces.com/problemset/problem/1872/C
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
    const [l, r] = lines[i++].split(" ").map(Number);
    solve(l, r);
  }
});

function solve(l, r) {
  if (l === r) {
    let num = l;
    for (let i = 2; i * i <= num; i++) {
      let a = i;
      let b = num - i;
      if (b % a === 0) {
        console.log(a, b);
        return;
      }
    }
    console.log(-1);
    return;
  }
  if ((l === 1 && r === 2) || (l === 1 && r === 3) || (l === 2 && r === 3)) {
    console.log(-1);
    return;
  }
  if (r % 2 === 0) {
    console.log(r / 2, r / 2);
  } else {
    console.log((r - 1) / 2, (r - 1) / 2);
  }
}
