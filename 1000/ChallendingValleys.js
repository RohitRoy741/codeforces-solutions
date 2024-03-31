// Problem Link: https://codeforces.com/problemset/problem/1760/D
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
  let arr = [Infinity];
  for (let i = 0; i < n; i++) {
    if (a[i] !== arr[arr.length - 1]) {
      arr.push(a[i]);
    }
  }
  arr.push(Infinity);
  //console.log(arr);
  let candidates = 0;
  for (let i = 1; i <= n; i++) {
    if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
      candidates++;
    }
  }
  //console.log(candidates);
  if (candidates === 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
