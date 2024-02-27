// Problem Link: https://codeforces.com/problemset/problem/1896/B
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
    let string = lines[i++];
    solve(n, string);
  }
});
function solve(n, string) {
  let index = 0;
  while (string[index] === "B") {
    index++;
  }
  string = string.slice(index);
  if (string.length === 0) {
    console.log(0);
    return;
  }
  index = string.length - 1;
  while (string[index] === "A") {
    index--;
  }
  string = string.slice(0, index + 1);
  if (string.length === 0) {
    console.log(0);
    return;
  }
  console.log(string.length - 1);
}
