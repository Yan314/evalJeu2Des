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