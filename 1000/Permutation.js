// Problem Link: https://codeforces.com/problemset/problem/1790/C
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
    let permutations = [];
    for (let j = 0; j < n; j++) {
      permutations.push(lines[i++].split(" ").map(Number));
    }
    solve(n, permutations);
  }
});

function solve(n, permutations) {
  //console.log(permutations);
  const map = createMap(n, permutations);
  //console.log(map);
  let result = [];
  let [a, b, c] = Array.from(map.values())
    .map((p) => p[0])
    .slice(0, 3);
  let firstElement = a === b ? a : c;
  result.push(firstElement);
  let element = firstElement;
  for (let i = 1; i < n; i++) {
    let permutation = map.get(element);
    let nextElement = permutation[i - 1];
    result.push(nextElement);
    element = nextElement;
  }
  console.log(result.join(" "));
}

function createMap(n, permutations) {
  let total = (n * (n + 1)) / 2;
  let map = new Map();
  for (let permutation of permutations) {
    let sum = permutation.reduce((acc, element) => acc + element, 0);
    map.set(total - sum, permutation);
  }
  return map;
}
