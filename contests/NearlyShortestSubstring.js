// Problem Link: https://codeforces.com/contest/1950/problem/E
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
    const s = lines[i++];
    solve(n, s);
  }
});

function solve(n, s) {
  for (let i = 1; i <= n; i++) {
    if (n % i !== 0) {
      continue;
    }
    let substring1 = s.slice(0, i);

    let substring2 = s.slice(i, 2 * i);
    //console.log(substring1, substring2);
    let repeat1 = repeat(substring1, n / i);
    let repeat2 = repeat(substring2, n / i);
    //console.log(repeat1, repeat2);
    //console.log(s);
    if (compare(s, repeat1)) {
      console.log(i);
      return;
    }
    if (compare(s, repeat2)) {
      console.log(i);
      return;
    }
  }
}

function compare(s1, s2) {
  //console.log("s1: ", s1, "s2: ", s2);
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  if (count <= 1) {
    return true;
  } else {
    return false;
  }
}

function repeat(s, k) {
  let string = "";
  for (let i = 0; i < k; i++) {
    string += s;
  }
  return string;
}
