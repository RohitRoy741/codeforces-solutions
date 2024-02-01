// Problem Link: https://codeforces.com/problemset/problem/1903/A
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
    const array = lines[i++].split(" ").map(Number);
    solve(n, k, array);
  }
});

function solve(n, k, array) {
  if (k > 1) {
    console.log("YES");
  } else {
    let num = array[0];
    let sorted = true;
    for (let i = 1; i < n; i++) {
      if (array[i] < num) {
        sorted = false;
        break;
      } else {
        num = array[i];
      }
    }
    if (sorted) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
