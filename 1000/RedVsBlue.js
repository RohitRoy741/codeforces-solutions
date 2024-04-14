// Problem Link: https://codeforces.com/problemset/problem/1659/A
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
    const [n, r, b] = lines[i++].split(" ").map(Number);
    solve(n, r, b);
  }
});
function solve(n, r, b) {
  let divisions = b + 1;
  let length = Math.floor(r / divisions);
  let remaining = r % divisions;
  let red = Array.from({ length: length }).fill("R").join("");
  let result = red;
  for (let i = 0; i < divisions - 1; i++) {
    if (remaining > 0) {
      result += "R" + "B" + red;
      remaining--;
    } else {
      result += "B" + red;
    }
  }
  console.log(result);
}
