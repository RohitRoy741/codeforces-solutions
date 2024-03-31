// Problem Link: https://codeforces.com/problemset/problem/1772/C
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
    const [k, n] = lines[i++].split(" ").map(Number);
    solve(k, n);
  }
});

function solve(k, n) {
  let result = [1, 2];
  let required = k - 2;
  let current = 2;
  let jump = 2;
  while (required > 0) {
    //console.log("Stats: ", current, jump, required);
    let dest = current + jump;
    // console.log("Dest: ", dest);
    // console.log("Dest > n: ", dest > n);
    // console.log("n-dest: ", n - dest);
    // console.log("n - dest > required - 1: ", n - dest > required - 1);
    if (dest > n || n - dest < required - 1) {
      result.push(current + 1);
      current++;
    } else {
      result.push(dest);
      current = dest;
      jump++;
    }
    required--;
  }
  console.log(result.join(" "));
}
