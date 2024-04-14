// Problem Link: https://codeforces.com/problemset/problem/1622/B
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
    const s = lines[i++].split("").map(Number);
    solve(n, a, s);
  }
});

function solve(n, a, s) {
  let liked = [];
  let disliked = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === 0) {
      disliked.push(a[i]);
    } else {
      liked.push(a[i]);
    }
  }
  let map = new Map();
  disliked.sort((a, b) => a - b);
  liked.sort((a, b) => a - b);
  let i = 1;
  for (let song of disliked) {
    map.set(song, i++);
  }
  for (let song of liked) {
    map.set(song, i++);
  }
  let result = [];
  for (let song of a) {
    result.push(map.get(song));
  }
  console.log(result.join(" "));
}
