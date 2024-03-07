//Problem Link: https://codeforces.com/problemset/problem/1841/B
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
    const q = +lines[i++];
    let queries = lines[i++].split(" ").map(Number);
    solve(q, queries);
  }
});

function solve(q, queries) {
  let num = queries[0];
  let prev = queries[0];
  let d = false;
  let result = [1];
  for (let i = 1; i < q; i++) {
    //console.log(queries[i], prev, d, num);
    //console.log(result);
    if (
      (queries[i] >= prev && !d) ||
      (d && queries[i] <= num && queries[i] >= prev)
    ) {
      prev = queries[i];
      result.push(1);
    } else {
      if (!d && queries[i] <= num) {
        d = true;
        prev = queries[i];
        result.push(1);
      } else {
        result.push(0);
      }
    }
    //console.log(result);
  }
  console.log(result.join(""));
}
