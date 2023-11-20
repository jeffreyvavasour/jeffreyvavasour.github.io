// dom elements
const result = document.getElementById("result");
const arrayPara = document.getElementById("arrayPara");

// create arr of 5 random number from 1-10
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * (10 - 1)) + 1);
}

// count of numbers in array that are users guess
let count = 0;

// ask user for number
const userGuess = parseInt(prompt("Guess a number!"));

// calculate amount of times number is in array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == userGuess) {
    count++;
  }
}

// display result
result.innerHTML = `Your number was in the array ${count} times!`;
arrayPara.innerHTML = arr.toString();
