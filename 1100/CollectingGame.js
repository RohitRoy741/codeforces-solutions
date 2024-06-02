// Problem Link: https://codeforces.com/problemset/problem/1904/B
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
  let numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push([a[i], i]);
  }
  numbers.sort((a, b) => a[0] - b[0]);
  let sum = 0;
  for (number of numbers) {
    sum += number[0];
    number.push(sum);
  }
  //console.log(numbers);
  numbers[n - 1].push(n - 1);
  for (let i = n - 2; i >= 0; i--) {
    let before = i;
    if (numbers[i][2] >= numbers[i + 1][0]) {
      let after = numbers[i + 1][3] - i;
      before += after;
    }
    numbers[i].push(before);
  }
  let result = Array.from({ length: n }, () => 0);
  for (let number of numbers) {
    result[number[1]] = number[3];
  }
  console.log(result.join(" "));
}
