const fs = require("fs");

function puzzleOne(arrayInput) {}

function puzzleTwo(arrayInput) {}

const lines = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .filter((e) => e);
console.log("Puzzle one: " + puzzleOne(lines));
console.log("Puzzle two: " + puzzleTwo(lines));
