// Problem Link: https://codeforces.com/problemset/problem/1798/B
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
    let m = +lines[i++];
    let lengths = [];
    let arrays = [];
    for (let j = 0; j < m; j++) {
      const n = +lines[i++];
      lengths.push(n);
      const a = lines[i++].split(" ").map(Number);
      arrays.push(a);
    }
    //console.log(m, lengths, arrays);
    solve(m, lengths, arrays);
  }
});

function solve(m, lengths, arrays) {
  let result = [];
  let set = new Set();
  //console.log(m, lengths, arrays);
  for (let i = m - 1; i >= 0; i--) {
    let a = arrays[i];
    let found = false;
    for (let j = 0; j < lengths[i]; j++) {
      if (!set.has(a[j])) {
        found = true;
        result.push(a[j]);
        break;
      }
    }
    if (!found) {
      console.log(-1);
      return;
    }
    for (let element of a) {
      set.add(element);
    }
  }
  console.log(result.reverse().join(" "));
}
