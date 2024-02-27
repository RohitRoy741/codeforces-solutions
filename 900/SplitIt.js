// Problem Link: https://codeforces.com/problemset/problem/1496/A
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
    const s = lines[i++];
    solve(n, k, s);
  }
});

function solve(n, k, s) {
  let i = 0;
  j = s.length - 1;
  while (i < j && i < k) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      console.log("NO");
      return;
    }
  }
  //console.log(i, j);
  if (i > j || i < k) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
