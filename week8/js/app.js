var button = document.getElementById("button");
button.addEventListener("click", play);

var resultDisplay = document.getElementById("result");

function play() {
  var choice = parseInt(
    prompt(
      "Enter number 1 for Rock, number 2 for Paper, or number 3 for Scissors"
    )
  );
  var computerChoice = getRandomOption();
  var result;

  if (choice == 1) {
    if (computerChoice == 1) {
      result = "you draw";
    } else if (computerChoice == 2) {
      result = "you lose";
    } else if (computerChoice == 3) {
      result = "you win";
    }
  } else if (choice == 2) {
    if (computerChoice == 1) {
      result = "you win";
    } else if (computerChoice == 2) {
      result = "you draw";
    } else if (computerChoice == 3) {
      result = "you lose";
    }
  } else if (choice == 3) {
    if (computerChoice == 1) {
      result = "you lose";
    } else if (computerChoice == 2) {
      result = "you win";
    } else if (computerChoice == 3) {
      result = "you draw";
    }
  } else {
    result = "Invalid Input";
  }

  choice =
    choice == 1
      ? "Rock"
      : choice == 2
      ? "Paper"
      : choice == 3
      ? "Scissors"
      : "an ivalid input";
  computerChoice =
    computerChoice == 1 ? "Rock" : computerChoice == 2 ? "Paper" : "Scissors";

  resultDisplay.innerHTML =
    "You chose " +
    choice +
    ", computer chose " +
    computerChoice +
    ". " +
    result;
}

function getRandomOption() {
  return Math.floor(Math.random() * (3 - 1) + 1);
}
