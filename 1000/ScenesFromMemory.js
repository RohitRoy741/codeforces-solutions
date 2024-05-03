// Problem Link: https://codeforces.com/problemset/problem/1562/B
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
    const k = +lines[i++];
    const digits = lines[i++].split("").map(Number);
    solve(k, digits);
  }
});

function solve(k, digits) {
  for (let i = 0; i < k; i++) {
    if (!isPrime(digits[i])) {
      console.log(1);
      console.log(digits[i]);
      return;
    }
  }
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < k; j++) {
      if (!isPrime(Number(digits[i].toString() + digits[j].toString()))) {
        console.log(2);
        console.log(Number(digits[i].toString() + digits[j].toString()));
        return;
      }
    }
  }
}

function isPrime(num) {
  if (num < 2) return false;
  //console.log(num);
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
