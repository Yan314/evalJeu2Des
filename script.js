//adress: https://devyan314.com/jeu2des/index.html

// Active player + counter player
var activePlayer = 0;
var counterPlayer1 = 0;
var counterPlayer2 = 0;
var roundPlayer1 =0;
var roundPlayer2 =0;

// newGame()
function newGame() {
  activePlayer = 1;
  document.querySelector(".activePlayer").innerHTML = activePlayer;
  document.querySelector(".p1").innerHTML = ".........";
  counterPlayer1 = 0;
  counterPlayer2 = 0;
  document.querySelector(".counterPlayer1").innerHTML = counterPlayer1;
  document.querySelector(".counterPlayer2").innerHTML = counterPlayer2;
  document.querySelector(".roundPlayer1").innerHTML = roundPlayer1;
  document.querySelector(".roundPlayer2").innerHTML = roundPlayer2;
}

// Function to roll the dice
function rollTheDice() {
  activePlayer = document.querySelector(".activePlayer").innerHTML;
  console.log(activePlayer);
  var randomNumber = 0;
  setTimeout(function() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber + ".png");
  if (randomNumber === 1) { 
    if (activePlayer == 1) {
      activePlayer = 2;
      document.querySelector(".activePlayer").innerHTML = 2;
      document.querySelector(".p2").innerHTML = ".........";
      document.querySelector(".p1").innerHTML = ".";
      roundPlayer1 = 0;
      document.querySelector(".roundPlayer1").innerHTML = 0;
    } else {
      activePlayer = 1;
      document.querySelector(".activePlayer").innerHTML = 1;
      document.querySelector(".p2").innerHTML = ".";
      document.querySelector(".p1").innerHTML = ".........";
      roundPlayer2 = 0;
      document.querySelector(".roundPlayer2").innerHTML = 0;
    }
  } else if (activePlayer == 1) {
    roundPlayer1 = roundPlayer1 + randomNumber;
    document.querySelector(".roundPlayer1").innerHTML = roundPlayer1;
  } else {
    roundPlayer2 = roundPlayer2 + randomNumber;
    document.querySelector(".roundPlayer2").innerHTML = roundPlayer2;
  }
  }, 120);
}

// Function to Hold
function holdPlayer() {
  activePlayer = document.querySelector(".activePlayer").innerHTML;
  if (activePlayer == 1) {
    activePlayer = 2;
    document.querySelector(".activePlayer").innerHTML = 2;
    counterPlayer1 = counterPlayer1 + roundPlayer1;
    document.querySelector(".p2").innerHTML = ".........";
    document.querySelector(".p1").innerHTML = ".";
    roundPlayer1 = 0;
    document.querySelector(".roundPlayer1").innerHTML = roundPlayer1;
    if (counterPlayer1 >= 100) {
      counterPlayer1 = 100;
      document.querySelector(".counterPlayer1").innerHTML = counterPlayer1;
      document.querySelector(".activePlayer").innerHTML = "1 WIN";
    } else {
      document.querySelector(".counterPlayer1").innerHTML = counterPlayer1;
    }
  } else {
    activePlayer = 1;
    document.querySelector(".activePlayer").innerHTML = 1;
    counterPlayer2 = counterPlayer2 + roundPlayer2;
    document.querySelector(".p2").innerHTML = ".";
    document.querySelector(".p1").innerHTML = ".........";
    roundPlayer2 = 0;
    document.querySelector(".roundPlayer2").innerHTML = roundPlayer2;
    if (counterPlayer2 >= 100) {
      counterPlayer2 = 100;
      document.querySelector(".counterPlayer2").innerHTML = counterPlayer2;
      document.querySelector(".activePlayer").innerHTML = "2 WIN";
    } else {
      document.querySelector(".counterPlayer2").innerHTML = counterPlayer2;
    }
  }
}