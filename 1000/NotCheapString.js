// Problem Link: https://codeforces.com/problemset/problem/1702/D
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
    const s = lines[i++];
    const p = +lines[i++];
    solve(s, p);
  }
});

function solve(s, p) {
  let values = [];
  for (let i = 0; i < s.length; i++) {
    values.push([s[i].charCodeAt(0) - 96, i]);
  }
  values.sort((a, b) => b[0] - a[0]);
  //console.log("Initial Values: ", values);
  let required = values.reduce((acc, val) => acc + val[0], 0) - p;
  //console.log("Required: ", required);
  for (let value of values) {
    if (required <= 0) break;
    let diff = value[0];

    required -= diff;
    value[0] = 0;
  }
  //console.log("Final Values: ", values);
  values = values.filter((val) => val[0] > 0);
  values.sort((a, b) => a[1] - b[1]);
  let str = "";
  for (let value of values) {
    str += String.fromCharCode(value[0] + 96);
  }
  console.log(str);
}
