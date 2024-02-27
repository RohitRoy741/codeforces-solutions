// Problem Link: https://codeforces.com/problemset/problem/1555/A
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
    const n = BigInt(lines[i++]);
    solve(n);
  }
});

function solve(n) {
  if (n <= BigInt(6)) {
    console.log(15);
  } else {
    //console.log(n);
    //console.log(n % BigInt(2));
    if (n % BigInt(2) === BigInt(1)) {
      n = n + BigInt(1);
    }
    console.log(String((n / BigInt(2)) * BigInt(5)));
  }
}
