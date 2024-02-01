//Problem Link: https://codeforces.com/problemset/problem/1921/C
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
    const [n, f, a, b] = lines[i++].split(" ").map(Number);
    const m = lines[i++].split(" ").map(Number);
    solve(n, f, a, b, m);
  }
});

function solve(n, f, a, b, m) {
  //console.log(n, f, a, b, m);
  for (let i = 0; i < n; i++) {
    const onConsumption = (m[i] - (i > 0 ? m[i - 1] : 0)) * a;
    const offConsumption = b;
    //console.log("Moment: ", m[i]);
    if (onConsumption < offConsumption) {
      f = f - onConsumption;
      if (f <= 0) {
        console.log("NO");
        return;
      }
    } else {
      f = f - offConsumption;
      if (f <= 0) {
        console.log("NO");
        return;
      }
    }
    //console.log("Fuel: ", f);
  }
  console.log("YES");
}
