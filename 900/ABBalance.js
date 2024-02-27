// Problem Link: https://codeforces.com/problemset/problem/1606/A
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
    const string = lines[i++];
    solve(string);
  }
});

function solve(string) {
  let ab = 0;
  let ba = 0;
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === "a" && string[i + 1] === "b") {
      ab++;
    } else if (string[i] === "b" && string[i + 1] === "a") {
      ba++;
    }
  }
  //console.log(ab, ba);
  if (ab === ba) {
    console.log(string);
  } else if (ab > ba) {
    console.log(string.slice(0, string.length - 1) + "a");
  } else {
    console.log(string.slice(0, string.length - 1) + "b");
  }
}
