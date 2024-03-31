// Problem Link: https://codeforces.com/problemset/problem/1804/B
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
    const [n, k, d, w] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, d, w, a);
  }
});

function solve(n, k, d, w, a) {
  let doses = k;
  let open = -1;
  let close = -1;
  let packs = 0;
  for (let i = 0; i < n; i++) {
    if (close === -1 || doses === 0 || a[i] > close) {
      open = a[i] + w;
      close = a[i] + w + d;
      packs++;
      doses = k;
    }
    if (a[i] <= close) {
      doses--;
    }
  }
  console.log(packs);
}
