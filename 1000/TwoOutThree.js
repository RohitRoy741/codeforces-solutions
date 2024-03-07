//Link: https://codeforces.com/problemset/problem/1894/B
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
    const a = lines[i++].split(" ").map(Number);
    solve(n, a);
  }
});

function solve(n, a) {
  let included = new Set();
  let paired = new Set();
  let available = 2;
  let curr = 2;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (!paired.has(a[i]) && included.has(a[i]) && available > 0) {
      result.push(curr);
      curr++;
      available--;
      paired.add(a[i]);
      included.add(a[i]);
    } else {
      result.push(1);
      included.add(a[i]);
    }
  }
  if (available === 0) {
    console.log(result.join(" "));
  } else {
    console.log("-1");
  }
}
