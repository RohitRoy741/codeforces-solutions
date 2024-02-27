//Problem Link: https://codeforces.com/problemset/problem/1451/B
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
    const [n, q] = lines[i++].split(" ").map(Number);
    const s = lines[i++];
    let queries = [];
    let j = 0;
    while (j < q) {
      queries.push(lines[i++].split(" ").map(Number));
      j++;
    }
    solve(n, s, queries);
  }
});

function solve(n, s, queries) {
  let begin = [];
  let end = [];
  let one = false;
  let zero = false;
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      begin.push(zero);
      zero = true;
    } else {
      begin.push(one);
      one = true;
    }
  }
  zero = false;
  one = false;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "0") {
      end.push(zero);
      zero = true;
    } else {
      end.push(one);
      one = true;
    }
  }
  end.reverse();
  for (let query of queries) {
    let l = query[0] - 1;
    let r = query[1] - 1;
    if (begin[l] || end[r]) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
