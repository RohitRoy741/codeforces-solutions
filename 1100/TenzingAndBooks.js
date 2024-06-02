// Problem Link: https://codeforces.com/problemset/problem/1842/B
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
    const [n, x] = lines[i++].split(" ").map(Number);
    const b1 = lines[i++].split(" ").map(Number);
    const b2 = lines[i++].split(" ").map(Number);
    const b3 = lines[i++].split(" ").map(Number);
    solve(n, x, b1, b2, b3);
  }
});

function solve(n, x, b1, b2, b3) {
  if (x === 0) {
    console.log("YES");
    return;
  }
  let bitmask = getBitmask(x);

  let first = true;
  let second = true;
  let third = true;

  let current = 0;
  for (let i = 0; i < n; i++) {
    if (first && (bitmask & b1[i]) === 0) {
      current = current | b1[i];
    } else {
      first = false;
    }

    if (second && (bitmask & b2[i]) === 0) {
      current = current | b2[i];
    } else {
      second = false;
    }

    if (third && (bitmask & b3[i]) === 0) {
      current = current | b3[i];
    } else {
      third = false;
    }
    //console.log("Current:", current);
    if (current === x) {
      console.log("YES");
      return;
    }
    if (!first && !second && !third) {
      console.log("NO");
      return;
    }
  }
  console.log("NO");
}

function getBitmask(num) {
  let binary = num.toString(2).split("");
  for (let i = 0; i < binary.length; i++) {
    binary[i] = binary[i] === "0" ? "1" : "0";
  }
  binary = binary.join("");
  let onePad = Array.from({ length: 30 - binary.length }, () => 1).join("");
  return parseInt(onePad + binary, 2);
}
