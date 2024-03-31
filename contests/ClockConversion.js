// Problem Link: https://codeforces.com/contest/1950/problem/C
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
    const time = lines[i++];
    solve(time);
  }
});

function solve(time) {
  let hour = Number(time.slice(0, 2));
  //console.log(hour);
  if (hour < 12) {
    if (hour === 0) {
      hour = 12;
    } else {
      hour = hour;
    }
    if (hour < 10) {
      console.log("0" + hour.toString() + time.slice(2) + " AM");
      return;
    }
    console.log(hour.toString() + time.slice(2) + " AM");
  } else {
    if (hour === 12) {
      console.log(time + " PM");
      return;
    }
    hour = hour - 12;
    if (hour < 10) {
      console.log("0" + hour.toString() + time.slice(2) + " PM");
      return;
    }
    time = hour.toString() + time.slice(2);
    console.log(time + " PM");
  }
}
