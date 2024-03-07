//Problem Link: https://codeforces.com/problemset/problem/1861/B
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
    let s1 = lines[i++];
    let s2 = lines[i++];
    solve(s1, s2);
  }
});

function solve(s1, s2) {
  let zeroEqual = [true];
  let oneEqual = [false];
  let n = s1.length;
  for (let i = 1; i < n - 1; i++) {
    if (s1[i] === "0" && s1[i] === s2[i]) {
      zeroEqual[i] = true;
    } else {
      zeroEqual[i] = false;
    }
    if (s1[i] === "1" && s1[i] === s2[i]) {
      oneEqual[i] = true;
    } else {
      oneEqual[i] = false;
    }
  }
  //console.log(zeroEqual);
  //console.log(oneEqual);
  if (zeroEqual[n - 2]) {
    console.log("YES");
    return;
  } else if (oneEqual[1]) {
    console.log("YES");
    return;
  }
  for (let i = 0; i < n - 1; i++) {
    if (zeroEqual[i] && oneEqual[i + 1]) {
      console.log("YES");
      return;
    }
  }
  console.log("NO");
}
