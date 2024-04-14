// Problem Link: https://codeforces.com/problemset/problem/1605/B
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
    let n = +lines[i++];
    const a = lines[i++].split("").map(Number);
    solve(n, a);
  }
});

function solve(n, a) {
  let ones = [],
    zeroes = [];
  let flag = false;
  let front = 0,
    back = n - 1;
  while (front < back) {
    if (a[front] === 0) {
      front++;
    }
    if (a[back] === 1) {
      back--;
    }
    if (a[front] === 1 && a[back] === 0) {
      if (!flag) flag = true;
      ones.push(front + 1);
      zeroes.push(back + 1);
      front++;
      back--;
    }
  }

  if (!flag) {
    console.log(0);
    return;
  }
  console.log(1);
  console.log(
    ones.length + zeroes.length,
    ones.concat(zeroes.reverse()).join(" ")
  );
}
