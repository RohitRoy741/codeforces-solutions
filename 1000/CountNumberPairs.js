// Problem Link: https://codeforces.com/problemset/problem/1800/B
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
    const [n, k] = lines[i++].split(" ").map(Number);
    const s = lines[i++];
    solve(n, k, s);
  }
});

function solve(n, k, s) {
  let small = new Map();
  let caps = new Map();
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === s[i].toLowerCase()) {
      if (small.has(s[i])) {
        small.set(s[i], small.get(s[i]) + 1);
      } else {
        small.set(s[i], 1);
      }
    } else {
      if (caps.has(s[i])) {
        caps.set(s[i], caps.get(s[i]) + 1);
      } else {
        caps.set(s[i], 1);
      }
    }
  }
  for (let char of small.keys()) {
    if (caps.has(char.toUpperCase())) {
      let min = Math.min(small.get(char), caps.get(char.toUpperCase()));
      ans += min;
      small.set(char, small.get(char) - min);
      caps.set(char.toUpperCase(), caps.get(char.toUpperCase()) - min);
    }
  }
  for (let char of small.keys()) {
    if (k <= 0) break;
    if (small.get(char) < 2) {
      continue;
    }
    let min = Math.min(k, Math.floor(small.get(char) / 2));
    ans += min;
    k -= min;
  }
  for (let char of caps.keys()) {
    if (k <= 0) break;
    if (caps.get(char) < 2) {
      continue;
    }
    let min = Math.min(k, Math.floor(caps.get(char) / 2));
    ans += min;
    k -= min;
  }
  console.log(ans);
}
