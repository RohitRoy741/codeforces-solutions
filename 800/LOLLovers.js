// Problem Link: https://codeforces.com/problemset/problem/1912/L
let input = "";
process.stdin.on("data", (data) => (input += data));
process.stdin.on("end", () => {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  //   const t = +lines[0];
  let i = 0;
  while (i < lines.length) {
    const n = +lines[i++];
    const items = lines[i++].split("");
    solve(n, items);
  }
});

function solve(n, items) {
  if (items.slice(1).filter((item) => item === items[0]).length !== 1) {
    console.log(1);
    return;
  }
  const item1 = items[0];
  let count = 0;
  let index = 1;
  while (index < items.length && items[index] !== item1) {
    count++;
    index++;
  }
  if (index === items.length - 1) {
    console.log(-1);
    return;
  }
  let myItems = index + 1;
  let friendsItems = n - myItems;
  if (count === friendsItems) {
    if (friendsItems === 1) {
      console.log(-1);
      return;
    }
  }
  console.log(myItems);
}
