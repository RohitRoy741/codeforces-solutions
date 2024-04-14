// Problem Link: https://codeforces.com/problemset/problem/1598/B
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
    let students = [];
    for (let j = 0; j < n; j++) {
      students.push(lines[i++].split(" ").map(Number));
    }
    solve(n, students);
  }
});

function solve(n, students) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let daysMap = new Map([
    ["Monday", []],
    ["Tuesday", []],
    ["Wednesday", []],
    ["Thursday", []],
    ["Friday", []],
  ]);
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < n; j++) {
      let arr = daysMap.get(days[i]);
      if (students[j][i] === 1) {
        arr.push(j + 1);
        daysMap.set(days[i], arr);
      }
    }
  }
  let values = Array.from(daysMap.values());
  for (let i = 0; i < 5; i++) {
    if (values[i].length >= n / 2) {
      for (let j = i + 1; j < 5; j++) {
        if (values[j].length >= n / 2) {
          if (check(values[i], values[j], n)) {
            console.log("YES");
            return;
          }
        }
      }
    }
  }

  console.log("NO");
}

function check(arr1, arr2, n) {
  let set = new Set([...arr1, ...arr2]);
  return set.size === n;
}
