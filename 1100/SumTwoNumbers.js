// Problem Link: https://codeforces.com/problemset/problem/1788/B
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
    const digits = lines[i++].split("").map(Number);
    solve(digits);
  }
});

function solve(digits) {
  const n = digits.length;
  let first = [];
  let second = [];
  let current = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] % 2 === 0) {
      first.push(digits[i] / 2);
      second.push(digits[i] / 2);
    } else {
      let greater = Math.ceil(digits[i] / 2);
      let smaller = Math.floor(digits[i] / 2);
      if (current === 0) {
        first.push(greater);
        second.push(smaller);
      } else {
        first.push(smaller);
        second.push(greater);
      }
      current = (current + 1) % 2;
    }
  }
  first.reverse();
  let index = 0;
  while (first[index] === 0) {
    index++;
  }
  index = Math.min(index, first.length - 1);
  first = first.slice(index);
  second.reverse();
  index = 0;
  while (second[index] === 0) {
    index++;
  }
  index = Math.min(index, second.length - 1);
  second = second.slice(index);
  console.log(first.join(""));
  console.log(second.join(""));
}
