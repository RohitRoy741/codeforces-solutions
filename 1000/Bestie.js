// Problem Link: https://codeforces.com/problemset/problem/1732/A
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
  let g = gcdArray(a, n);
  if (g === 1) {
    console.log(0);
    return;
  }
  let last = gcd(a[n - 1], n);
  let newArr = a.slice(0, n - 1);
  newArr.push(last);
  g = gcdArray(newArr, n);
  if (g === 1) {
    console.log(1);
    return;
  }
  let secondLast = gcd(a[n - 2], n - 1);
  newArr = a.slice(0, n - 2);
  newArr.push(secondLast);
  newArr.push(a[n - 1]);
  g = gcdArray(newArr, n);
  if (g === 1) {
    console.log(2);
    return;
  }
  console.log(3);
}
function gcdArray(arr, n) {
  let result = arr[0];
  for (let i = 1; i < n; i++) {
    result = gcd(arr[i], result);
  }
  return result;
}
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
