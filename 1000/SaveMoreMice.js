// Problem Link: https://codeforces.com/problemset/problem/1593/C
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
    const arr = lines[i++].split(" ").map(Number);
    solve(n, k, arr);
  }
});

function solve(n, k, arr) {
  arr.sort((a, b) => b - a);
  let second = 0;
  let saved = 0;
  for (let i = 0; i < k; i++) {
    //console.log("Second: ", second);
    //console.log("Mice location: ", arr[i]);
    if (second >= arr[i]) {
      break;
    }
    saved++;
    second += n - arr[i];
  }
  console.log(saved);
}
