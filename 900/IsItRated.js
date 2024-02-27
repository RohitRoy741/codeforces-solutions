// Problem Link: https://codeforces.com/problemset/problem/1505/A
process.stdin.on("data", (data) => {
  const input = data
    .toString()
    .split("\n")
    .map((line) => line.trim());
  for (let line of input) {
    if (line === "Is it rated?") {
      console.log("NO");
    }
  }
});
// let inputs = "";
// process.stdin.on("data", (c) => process.stdout.write("NO\n"));
