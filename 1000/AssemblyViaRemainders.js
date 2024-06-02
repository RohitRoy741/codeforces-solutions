// Problem Link: https://codeforces.com/problemset/problem/1968/C
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
    const x = lines[i++].split(" ").map(Number);
    solve(n, x);
  }
});

function solve(n, x) {
  const a = [x[0] + 1];
  for (let i = 0; i < n - 1; i++) {
    //console.log(a);
    let mod = x[i];
    //console.log("Mod: ", mod);
    if (i === n - 2) {
      a.push(a[i] + mod);
    } else {
      let next = x[i + 1];
      //console.log("next: ", next);
      let q = Math.ceil(next / a[i]);
      //console.log("q: ", q);
      let num = q * a[i] + mod;
      //console.log("num: ", num);
      if (num === x[i + 1]) {
        num += a[i];
      }
      a.push(num);
      //console.log("a: ", a);
    }
  }
  console.log(a.join(" "));
}
