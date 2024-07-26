// Problem Link: https://codeforces.com/problemset/problem/1977/B
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
    const x = +lines[i++];
    solve(x);
  }
});

function solve(x) {
  let binary = x.toString(2).split("");
  binary.reverse();
  let index = 0;
  while (index < binary.length - 1) {
    if (binary[index] !== "0" && binary[index + 1] != "0") {
      binary[index] = "-1";
      index++;
      while (index < binary.length && binary[index] != "0") {
        binary[index] = "0";
        index++;
      }
      binary[index] = "1";
    } else {
      index++;
    }
  }
  console.log(binary.length);
  console.log(binary.join(" "));
}
