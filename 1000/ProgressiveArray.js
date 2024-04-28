// Problem Link: https://codeforces.com/problemset/problem/1955/B
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
    const [n, c, d] = lines[i++].split(" ").map(Number);
    const a = lines[i++].split(" ").map(Number);
    solve(n, c, d, a);
  }
});
function solve(n, c, d, a) {
  a.sort((x, y) => x - y);
  let array = [];
  let row1 = [a[0]];
  for (let i = 1; i < n; i++) {
    row1[i] = row1[i - 1] + c;
  }
  array.push(row1);
  for (let i = 1; i < n; i++) {
    array.push([]);
    for (let j = 0; j < n; j++) {
      array[i][j] = array[i - 1][j] + d;
    }
  }
  array = array.flat().sort((x, y) => x - y);
  //console.log(array);
  //console.log(a);
  for (let i = 0; i < n * n; i++) {
    //console.log(array[i], a[i]);
    if (array[i] !== a[i]) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
