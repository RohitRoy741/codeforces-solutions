// Problem Link: https://codeforces.com/problemset/problem/1948/B
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
    const arr = lines[i++].split(" ").map(Number);
    solve(n, arr);
  }
});

function solve(n, arr) {
  let prev = arr[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    let current = arr[i];
    if (current <= prev) {
      prev = current;
    } else {
      let digits = current.toString().split("").map(Number);
      if (digits.length === 1) {
        console.log("NO");
        return;
      }
      if (digits[1] <= prev && digits[0] <= digits[1]) {
        prev = digits[0];
      } else {
        console.log("NO");
        return;
      }
    }
  }
  console.log("YES");
}
