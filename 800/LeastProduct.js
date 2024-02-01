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
  let positives = 0;
  let negatives = 0;
  for (let num of arr) {
    if (num > 0) {
      positives++;
    } else if (num < 0) {
      negatives++;
    } else {
      console.log("0");
      return;
    }
  }
  if (negatives === 0) {
    console.log("1");
    console.log("1 0");
    return;
  }
  if (negatives % 2 === 0) {
    console.log("1");
    console.log("1 0");
  } else {
    console.log("0");
  }
}
