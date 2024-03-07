//Problem Link: https://codeforces.com/problemset/problem/1859/B
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
    let sizes = [];
    let arrays = [];
    while (n--) {
      let size = +lines[i++];
      sizes.push(size);
      let array = lines[i++].split(" ").map(Number);
      arrays.push(array);
    }
    solve(sizes, arrays);
  }
});

function solve(sizes, arrays) {
  //console.log(sizes);
  //console.log(arrays);
  let minimums = [];
  let secondMinimums = [];
  for (let i = 0; i < sizes.length; i++) {
    let array = arrays[i];
    let minimum = Math.min(...array);
    minimums.push(minimum);
    let minIndex = array.indexOf(minimum);
    let secondMinium = Math.min(
      ...array.filter((element, index) => index !== minIndex)
    );
    secondMinimums.push(secondMinium);
  }
  //console.log(minimums);
  //console.log(secondMinimums);
  const minimumMinimum = Math.min(...minimums);
  const minimumSecondMinimum = Math.min(...secondMinimums);
  const index = secondMinimums.indexOf(minimumSecondMinimum);
  let result =
    minimumMinimum +
    secondMinimums
      .filter((element, i) => i !== index)
      .reduce((a, b) => a + b, 0);
  console.log(result);
}
