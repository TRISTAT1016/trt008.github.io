// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();

function rollDice() {
  die1 = Math.floor(Math.random() * 6) + 1;
  die2 = Math.floor(Math.random() * 6) + 1;
  dieSum = die1 + die2;

  // Get the base path of the images folder
  let basePath = window.location.href;
  basePath = basePath.substring(0, basePath.lastIndexOf('/') + 1);

  // Set the dice images based on the roll
  die1Image = document.querySelectorAll(".img1")[0];
  die1Name = basePath + "images/dice" + die1 + ".png";
  die1Image.setAttribute("src", die1Name);

  die2Image = document.querySelectorAll(".img2")[0];
  die2Name = basePath + "images/dice" + die2 + ".png";
  die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
}

function letsPlay() {
  let numPlays = parseInt(document.getElementById("numPlays").value) || 1;
  
  for (let i = 0; i < numPlays; i++) {
    rollDice();
    whoWon();
    updateMoneyCounter();
  }
}

function updateMoneyCounter() {
  // Update the money counter display
  document.getElementById("amountofmoney").textContent = "Money Counter: $" + balance;
}

  {rollDice();
  whoWon();
}

    function playMultipleTimes() {
      let numPlays = document.getElementById("numPlays").value;
      let moneyBalance = 0;

      for (let i = 0; i < numPlays; i++) {
        let result = playDiceGame();
        moneyBalance += result;
      }

      // Display the total money balance
      document.getElementById("result").textContent = `Total money balance: $${moneyBalance}`;
    }

    function playDiceGame() {
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;
      let total = dice1 + dice2;

      let moneyChange = 0;

      if (total >= 9) {
        moneyChange = 5; // Win: +$5
      } else if (total <= 5) {
        moneyChange = -5; // Loss: -$5
      }

      // Display the result dynamically
      document.getElementById("result").textContent = `Result: ${total} (${moneyChange > 0 ? 'Win' : (moneyChange < 0 ? 'Loss' : 'Draw')}: $${moneyChange})`;

      return moneyChange;
    }

