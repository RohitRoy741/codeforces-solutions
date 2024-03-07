//Problem Link: https://codeforces.com/problemset/problem/1931/C

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
    solve(n, a);
  }
});

function solve(n, a) {
  if (n === 1) {
    console.log(0);
    return;
  }
  if (a[0] === a[n - 1]) {
    let same = 2;
    let i = 1;
    while (i < n - 1 && a[i] === a[0]) {
      i++;
      same++;
    }
    if (a[i] === a[0]) {
      console.log(0);
      return;
    }
    i--;
    let j = n - 2;
    while (j > i && a[j] === a[n - 1]) {
      j--;
      same++;
    }
    console.log(n - same);
  } else {
    let leftSame = 1;
    let i = 1;
    while (i < n && a[i] === a[0]) {
      i++;
      leftSame++;
    }
    let rightSame = 1;
    let j = n - 2;
    while (j >= 0 && a[j] === a[n - 1]) {
      j--;
      rightSame++;
    }
    let same = Math.max(leftSame, rightSame);
    console.log(n - same);
  }
}
