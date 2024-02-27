// Problem Link: https://codeforces.com/problemset/problem/1494/A
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
    //console.log(i);
    s = lines[i++];
    solve(s);
  }
});

function solve(s) {
  let freq = new Map();
  let maxFreq = 0;
  let maxChar = "";
  for (let char of s) {
    if (freq.has(char)) {
      freq.set(char, freq.get(char) + 1);
    } else {
      freq.set(char, 1);
    }
    if (freq.get(char) > maxFreq) {
      maxFreq = freq.get(char);
      maxChar = char;
    }
  }
  if (
    maxFreq === s.length / 2 &&
    s[0] !== s[s.length - 1] &&
    (s[0] === maxChar || s[s.length - 1] === maxChar)
  ) {
    let brackets = assign(s, maxChar);
    //console.log(s);
    //console.log(brackets);
    if (isRegular(brackets)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  } else {
    console.log("NO");
  }
}

function assign(s, maxChar) {
  s = s.split("");
  //console.log("Max Char: ", maxChar);
  let otherChar = s[0] === maxChar ? ")" : "(";
  for (let i = 1; i < s.length - 1; i++) {
    //console.log(s[i], s[0], s[s.length - 1]);
    if (s[i] === s[0]) {
      s[i] = "(";
    } else if (s[i] === s[s.length - 1]) {
      s[i] = ")";
    } else {
      s[i] = otherChar;
    }
  }
  s[0] = "(";
  s[s.length - 1] = ")";
  return s;
}

function isRegular(s) {
  let stack = [];
  for (let char of s) {
    //console.log(char, stack);
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
