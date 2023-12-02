const fs = require("fs");

function puzzleOne(arrayInput) {
  // get numbers from array
  let getNumber = arrayInput.map((number) => {
    console.log("numero", number);
    let justNumber = number.replace(/\D/g, "");

    if (justNumber.length == 1) {
      return justNumber + justNumber;
    } else if (justNumber.length == 2) {
      return justNumber;
    } else if (justNumber.length > 2) {
      // put the digits together if they are more of 2
      let firstDigit = justNumber.slice(0, 1);
      let secondDigit = justNumber.slice(-1);
      return firstDigit + secondDigit;
    } else {
      return 0;
    }
  });

  let sum = 0;

  for (let i = 0; i < getNumber.length; i++) {
    sum += Number(getNumber[i]);
  }
  return sum;
}

function puzzleTwo(arrayInput) {
  let sum = 0;

  let recognizeNumber = [
    { word: "one", number: 1 },
    { word: "two", number: 2 },
    { word: "three", number: 3 },
    { word: "four", number: 4 },
    { word: "five", number: 5 },
    { word: "six", number: 6 },
    { word: "seven", number: 7 },
    { word: "eight", number: 8 },
    { word: "nine", number: 9 },
  ];

  for (let i = 0; i < arrayInput.length; i++) {
    const line = arrayInput[i];
    let newNumbers = [];

    for (let j = 0; j < line.length; j++) {
      for (const x of recognizeNumber) {
        if (line.substring(j, j + x.word.length) === x.word) {
          newNumbers.push(x.number);
        }
      }

      if (!isNaN(line[j])) {
        newNumbers.push(Number(line[j]));
      }
    }
    let firstNumber = newNumbers[0];
    let LastNumber = newNumbers[newNumbers.length - 1];
    let newNumber = `${firstNumber}${LastNumber}`;

    sum += Number(newNumber);
  }

  return sum;
}

const lines = fs
  .readFileSync(__dirname + "/input.txt", "utf-8")
  .split("\n")
  .filter((e) => e);
console.log("Puzzle one: " + puzzleOne(lines));
console.log("Puzzle two: " + puzzleTwo(lines));
