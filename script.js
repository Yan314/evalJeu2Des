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
  document.querySelector(".editPlayer1").innerHTML = 
  '<input type="text" name="username1" class="editPlayer" placeholder="Player 1">';
  document.querySelector(".editPlayer2").innerHTML = 
  '<input type="text" name="username2" class="editPlayer" placeholder="Player 2">';
}

// Function to roll the dice
function rollTheDice() {
  var div = $("img"); // Animation jQuery
    div.animate({rotate: '90deg', opacity: '0.6'}, "hide");
    div.animate({rotate: '180deg', opacity: '0.6'}, "hide");
    div.animate({rotate: '270deg', opacity: '0.6'}, "hide");
    div.animate({rotate: '360deg', opacity: '0.6'}, "hide");
    div.animate({rotate: '450deg', opacity: '0.6'}, "hide");
    div.animate({rotate: '540deg', opacity: '0.8'}, "hide");
    div.animate({rotate: '630deg', opacity: '0.9'}, "slow");
    div.animate({rotate: '720deg', opacity: '1'}, "slow");
  
  activePlayer = document.querySelector(".activePlayer").innerHTML;
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
  }, 2800);
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

// color with jQuery
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#div1").css({"background-color": "yellow"});
  });
});