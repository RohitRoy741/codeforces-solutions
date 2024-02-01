// Problem Link: https://codeforces.com/problemset/problem/1898/A
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
    const string = lines[i++];
    solve(n, k, string);
  }
});

function solve(n, k, string) {
  let count = string.split("").filter((ch) => ch === "B").length;
  if (count < k) {
    let i = 0,
      a = 0,
      difference = k - count;
    while (a < difference) {
      if (string[i] === "A") {
        a++;
      }
      i++;
    }
    console.log(1);
    console.log(i, "B");
  } else if (count > k) {
    let i = 0,
      b = 0,
      difference = count - k;
    while (b < difference) {
      if (string[i] === "B") {
        b++;
      }
      i++;
    }
    console.log(1);
    console.log(i, "A");
  } else {
    console.log(0);
  }
}
