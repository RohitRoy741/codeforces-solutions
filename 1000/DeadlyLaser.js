// Problem Link: https://codeforces.com/problemset/problem/1721/B
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
    const [n, m, x, y, d] = lines[i++].split(" ").map(Number);
    solve(n, m, x, y, d);
  }
});

function solve(n, m, x, y, d) {
  let path1 = true,
    path2 = true;
  for (let i = 0; i <= d; i++) {
    if (x + i === 1) {
      path1 = false;
    } else if (x + i === n) {
      path2 = false;
    }
    if (x - i === 1) {
      path1 = false;
    } else if (x - i === n) {
      path2 = false;
    }
    if (y + i === 1) {
      path2 = false;
    } else if (y + i === m) {
      path1 = false;
    }
    if (y - i === 1) {
      path2 = false;
    } else if (y - i === m) {
      path1 = false;
    }
  }
  //console.log(path1, path2);
  if (path1 || path2) {
    console.log(m + n - 2);
  } else {
    console.log(-1);
  }
}
