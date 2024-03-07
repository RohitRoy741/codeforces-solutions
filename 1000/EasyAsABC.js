//Problem Link: https://codeforces.com/problemset/problem/1906/A
let input = "";
process.stdin.on("data", (data) => (input += data));
process.stdin.on("end", () => {
  const lines = input
    .trim()
    .split("\n")
    .map((line) => line.trim());
  let i = 0;
  while (i < lines.length) {
    const row1 = lines[i++];
    const row2 = lines[i++];
    const row3 = lines[i++];
    const matrix = [row1, row2, row3];
    solve(matrix);
  }
});

function solve(matrix) {
  //console.log(matrix);
  let lowest = "D";
  if (
    matrix[0].includes("A") ||
    matrix[1].includes("A") ||
    matrix[2].includes("A")
  ) {
    lowest = "A";
  } else if (
    matrix[0].includes("B") ||
    matrix[1].includes("B") ||
    matrix[2].includes("B")
  ) {
    lowest = "B";
  } else {
    lowest = "C";
  }
  let lowestIndexes = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[i][j] === lowest) {
        lowestIndexes.push([i, j]);
      }
    }
  }
  //console.log(lowestIndexes);
  let secondLowest = "D";
  for (let lowestIndex of lowestIndexes) {
    let i = lowestIndex[0];
    let j = lowestIndex[1];
    const neighbors = [];
    if (i - 1 >= 0) {
      neighbors.push(matrix[i - 1][j]);
    }
    if (i + 1 < 3) {
      neighbors.push(matrix[i + 1][j]);
    }
    if (j - 1 >= 0) {
      neighbors.push(matrix[i][j - 1]);
    }
    if (j + 1 < 3) {
      neighbors.push(matrix[i][j + 1]);
    }
    if (i - 1 >= 0 && j - 1 >= 0) {
      neighbors.push(matrix[i - 1][j - 1]);
    }
    if (i + 1 < 3 && j + 1 < 3) {
      neighbors.push(matrix[i + 1][j + 1]);
    }
    if (i - 1 >= 0 && j + 1 < 3) {
      neighbors.push(matrix[i - 1][j + 1]);
    }
    if (i + 1 < 3 && j - 1 >= 0) {
      neighbors.push(matrix[i + 1][j - 1]);
    }

    for (let neighbor of neighbors) {
      if (neighbor && neighbor < secondLowest) {
        secondLowest = neighbor;
      }
    }
  }
  //console.log(secondLowest);
  let twoLowestStrings = [];
  for (let lowestIndex of lowestIndexes) {
    let i = lowestIndex[0];
    let j = lowestIndex[1];
    const neighbors = [];
    if (i - 1 >= 0) {
      neighbors.push([matrix[i - 1][j], [i - 1, j]]);
    }
    if (i + 1 < 3) {
      neighbors.push([matrix[i + 1][j], [i + 1, j]]);
    }
    if (j - 1 >= 0) {
      neighbors.push([matrix[i][j - 1], [i, j - 1]]);
    }
    if (j + 1 < 3) {
      neighbors.push([matrix[i][j + 1], [i, j + 1]]);
    }
    if (i - 1 >= 0 && j - 1 >= 0) {
      neighbors.push([matrix[i - 1][j - 1], [i - 1, j - 1]]);
    }
    if (i + 1 < 3 && j + 1 < 3) {
      neighbors.push([matrix[i + 1][j + 1], [i + 1, j + 1]]);
    }
    if (i - 1 >= 0 && j + 1 < 3) {
      neighbors.push([matrix[i - 1][j + 1], [i - 1, j + 1]]);
    }
    if (i + 1 < 3 && j - 1 >= 0) {
      neighbors.push([matrix[i + 1][j - 1], [i + 1, j - 1]]);
    }

    for (let neighbor of neighbors) {
      if (neighbor[0] && neighbor[0] === secondLowest) {
        twoLowestStrings.push([lowestIndex, neighbor[1]]);
      }
    }
  }
  //console.log(twoLowestStrings);
  let thirdLowest = "D";
  for (let twoLowestString of twoLowestStrings) {
    let i = twoLowestString[1][0];
    let j = twoLowestString[1][1];
    //console.log("i: ", i, "j: ", j);
    const neighbors = [];
    if (
      i - 1 >= 0 &&
      !(i - 1 === twoLowestString[0][0] && j === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i - 1][j]);
    }
    if (
      i + 1 < 3 &&
      !(i + 1 === twoLowestString[0][0] && j === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i + 1][j]);
    }
    if (
      j - 1 >= 0 &&
      !(i === twoLowestString[0][0] && j - 1 === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i][j - 1]);
    }
    if (
      j + 1 < 3 &&
      !(i === twoLowestString[0][0] && j + 1 === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i][j + 1]);
    }
    if (
      i - 1 >= 0 &&
      j - 1 >= 0 &&
      !(i - 1 === twoLowestString[0][0] && j - 1 === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i - 1][j - 1]);
    }
    if (
      i + 1 < 3 &&
      j + 1 < 3 &&
      !(i + 1 === twoLowestString[0][0] && j + 1 === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i + 1][j + 1]);
    }
    if (
      i - 1 >= 0 &&
      j + 1 < 3 &&
      !(i - 1 === twoLowestString[0][0] && j + 1 === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i - 1][j + 1]);
    }
    if (
      i + 1 < 3 &&
      j - 1 >= 0 &&
      !(i + 1 === twoLowestString[0][0] && j - 1 === twoLowestString[0][1])
    ) {
      neighbors.push(matrix[i + 1][j - 1]);
    }

    for (let neighbor of neighbors) {
      if (neighbor && neighbor < thirdLowest) {
        thirdLowest = neighbor;
      }
    }
  }
  //console.log(matrix);
  console.log(
    matrix[twoLowestStrings[0][0][0]][twoLowestStrings[0][0][1]] +
      matrix[twoLowestStrings[0][1][0]][twoLowestStrings[0][1][1]] +
      thirdLowest
  );
}
