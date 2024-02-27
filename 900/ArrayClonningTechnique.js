// Problem Link: https://codeforces.com/problemset/problem/1665/B
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
  let freq = new Map();
  for (let i = 0; i < n; i++) {
    freq.set(a[i], (freq.get(a[i]) || 0) + 1);
  }
  let maxFreq = 0;
  for (let freqValue of freq.values()) {
    maxFreq = Math.max(maxFreq, freqValue);
  }
  //console.log("Max Freq: ", maxFreq);
  let difference = n - maxFreq;
  let sum = maxFreq;
  let copies = 0;
  for (let i = 1; sum < n; i *= 2) {
    copies++;
    //console.log("Copies = ", copies);
    //console.log("Addition = ", maxFreq * i);
    sum += maxFreq * i;
    //console.log("SUM = ", sum);
  }
  console.log(copies + difference);
}
