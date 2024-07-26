// Problem Link: https://codeforces.com/problemset/problem/1931/A
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
    const sum = +lines[i++];
    solve(sum);
  }
});

function solve(sum) {
  //console.log(sum);
  let result = Array.from({ length: 3 });
  //console.log(result);
  for (let i = 2; i >= 0; i--) {
    let charCode = Math.min(26, sum - i);
    sum -= charCode;
    result[i] = charCode;
  }
  //console.log(result);
  let string = result
    .map((charCode) => String.fromCharCode(charCode + 96))
    .join("");
  console.log(string);
}
