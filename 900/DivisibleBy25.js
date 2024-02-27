// Problem Link: https://codeforces.com/problemset/problem/1593/B
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
    const n = lines[i++].trim();
    solve(n);
  }
});

function solve(n) {
  let min = Infinity;
  //console.log(n);
  for (let i = n.length - 1; i >= 0; i--) {
    if (n[i] === "0") {
      //console.log("found: ", n[i]);
      let costTillNow = n.length - 1 - i;
      //console.log("costTillNow: ", costTillNow);
      let j = i - 1;
      while (j > 0 && n[j] !== "0" && n[j] !== "5") {
        j--;
      }
      let totalCost;
      if (j < 0) {
        totalCost = Infinity;
      } else {
        totalCost = costTillNow + (i - j - 1);
      }
      //console.log("totalCost: ", totalCost);
      min = Math.min(min, totalCost);
    } else if (n[i] === "5") {
      let costTillNow = n.length - 1 - i;
      let j = i - 1;
      while (j > 0 && n[j] !== "2" && n[j] !== "7") {
        j--;
      }
      let totalCost;
      if (j < 0) {
        totalCost = Infinity;
      } else {
        totalCost = costTillNow + (i - j - 1);
      }
      min = Math.min(min, totalCost);
    }
  }
  console.log(min);
}
