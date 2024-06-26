// Problem Link: https://codeforces.com/problemset/problem/1832/B
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, k, a);
  }
});

function solve(n, k, a) {
  a.sort((a, b) => a - b);
  //console.log("Sorted:", a);
  let prefix = [a[0]];
  let total = a[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = a[i] + prefix[i - 1];
    total += a[i];
  }
  //console.log("Prefix:", prefix);

  let pointer1 = 2 * k;
  let pointer2 = 0;
  let max = 0;
  while (pointer1 >= 0) {
    //console.log("Pointer1:", pointer1, "Pointer2:", pointer2);
    let sum =
      prefix[n - pointer2 - 1] -
      (prefix[pointer1 - 1] ? prefix[pointer1 - 1] : 0);
    //console.log("Sum:", sum);
    max = Math.max(max, sum);
    pointer1 -= 2;
    pointer2++;
  }
  console.log(max);
}
