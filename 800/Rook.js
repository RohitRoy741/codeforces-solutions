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
    let [column, row] = lines[i++].split("");
    row = Number(row);
    solve(row, column);
  }
});

function solve(row, column) {
  for (let i = 1; i <= 8; i++) {
    if (i === row) continue;
    console.log(`${column}${i}`);
  }
  for (let i = "a".charCodeAt(0); i <= "h".charCodeAt(0); i++) {
    if (i === column.charCodeAt(0)) continue;
    console.log(`${String.fromCharCode(i)}${row}`);
  }
}
