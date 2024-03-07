//Problem Link: https://codeforces.com/problemset/problem/1907/B
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
    const s = lines[i++];
    solve(s);
  }
});

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

function solve(s) {
  let a = Array.from(s);
  let cap = new Stack();
  let small = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "B") {
      let index = cap.pop();
      if (index !== -1) {
        a[index] = "";
      }
    } else if (s[i] === "b") {
      let index = small.pop();
      if (index !== -1) {
        a[index] = "";
      }
    } else {
      if (s[i] >= "A" && s[i] <= "Z") {
        cap.push(i);
      } else if (s[i] >= "a" && s[i] <= "z") {
        small.push(i);
      }
    }
  }
  console.log(
    a.filter((char) => char !== "B" && char !== "b" && char !== "").join("")
  );
}
