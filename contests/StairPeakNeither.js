// Problem Link:
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
    const [a, b, c] = lines[i++].split(" ").map(Number);
    solve(a, b, c);
  }
});

function solve(a, b, c) {
  if (b > a && c > b) {
    console.log("STAIR");
  } else if (b > a && b > c) {
    console.log("PEAK");
  } else {
    console.log("NONE");
  }
}
