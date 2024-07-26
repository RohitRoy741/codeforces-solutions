// Problem Link: https://codeforces.com/problemset/problem/1923/A
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
    const n = lines[i++];
    const a = lines[i++].split(" ").map(Number);
    solve(n, a);
  }
});

function solve(n, a) {
  let left = 0;
  while (a[left] === 0) {
    left++;
  }
  let right = n - 1;
  while (a[right] === 0) {
    right--;
  }
  let moves = 0;
  for (let i = left + 1; i < right; i++) {
    if (a[i] === 0) {
      let lshift = i - left;
      let rshift = right - i;
      if (lshift < rshift) {
        moves += lshift;
        left++;
      } else {
        moves += rshift;
        right--;
      }
    }
  }
  console.log(moves);
}
