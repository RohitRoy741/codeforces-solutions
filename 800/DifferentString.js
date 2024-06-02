// Problem Link: https://codeforces.com/problemset/problem/1971/B
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
    const string = lines[i++].split("");
    solve(string);
  }
});

function solve(string) {
  let char = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== char) {
      console.log("YES");
      string[0] = string[i];
      string[i] = char;
      console.log(string.join(""));
      return;
    }
  }
  console.log("NO");
}
