// Problem Link: https://codeforces.com/problemset/problem/1902/B
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
    const [n, p, l, t] = lines[i++].split(" ").map(BigInt);
    solve(n, p, l, t);
  }
});

function solve(n, p, l, t) {
  let totalTasks = n / 7n;
  if (n % 7n) totalTasks++;
  let taskDays = totalTasks / 2n;
  if (totalTasks % 2n) taskDays++;
  let totalTaskPoints = totalTasks * t + taskDays * l;
  if (totalTaskPoints <= p) {
    let remainingPoints = p - totalTaskPoints;
    let remainingDays = remainingPoints / l;
    if (remainingPoints % l) remainingDays++;
    console.log(String(n - (taskDays + remainingDays)));
    return;
  }
  let dailyPoints = 2n * t + l;
  let daysRequired = p / dailyPoints;
  if (p % dailyPoints) daysRequired++;
  console.log(String(n - daysRequired));
}
