// Problem Link: https://codeforces.com/problemset/problem/1715/B
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
    const [n, k, b, s] = lines[i++].split(" ").map(BigInt);
    solve(n, k, b, s);
  }
});

function solve(n, k, b, s) {
  let total = k * b;
  //   console.log(total);
  //   console.log(typeof total);
  if (total > s) {
    console.log(-1);
    return;
  }
  const mod = (s - total) % n;
  //   console.log(mod);
  let r = (s - total) / n;
  if (mod !== 0n) {
    r += 1n;
  }
  //   console.log(r);
  if (r >= k) {
    console.log(-1);
    return;
  }
  //   console.log((s - total) % n);
  let arr = Array(Number(n)).fill(0n);
  arr[0] += k * b;
  //console.log(arr);
  let remaining = s - k * b;
  //console.log(remaining);
  for (let i = 0; i < n; i++) {
    let min = 0n;
    if (k - 1n < remaining) {
      min = k - 1n;
    } else {
      min = remaining;
    }

    arr[i] += min;
    remaining -= min;
  }
  //console.log(arr);
  console.log(arr.join(" "));
}
