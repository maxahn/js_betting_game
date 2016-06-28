var player = {
  bankroll: 100,
  right_guesses: 0, 
  wrong_gueses: 0
};
var bet;
var guess; 
function randomNumGen(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
 
function generateAndCheckGuess(guess) {
  var answer = randomNumGen(1,10);
  if (guess === answer) {
    console.log('Correct ' + answer);
    player.bankroll += bet;     
    $('#results').html("<p id='correct-guess'>Correct!</p>");
  } else if (guess === (answer + 1) || guess === (answer - 1)) {
    console.log('Close ' + answer);
    $('#results').html("<p id='close-guess'>Close! It was actually " + answer +"</p>");
  } else {
    console.log('Wrong! ' + answer);
    player.bankroll -= bet;     
    $('#results').html("<p id='incorrect-guess'>Incorrect! It was actually " + answer + "</p>");
  }
}

function gameOver() {
  return player.bankroll <= 0;
};

$(document).ready(function() {
  $('#player-stats #bank-roll').html(player.bankroll);

  $("#submit-button").on('click', function(e) {
    e.preventDefault();
    bet = $("input[name='bet']").val();
    guess = $("input[name='guess']").val();
    generateAndCheckGuess(guess);
    console.log('You now have $' + player.bankroll);
    $('#player-stats #bank-roll').html(player.bankroll);
    if (gameOver()) {
      $('#game-over').html('<p>GAME OVER! YOU LOST ALL YOUR MONEY</p>'); 
    }
  });

//var keepPlaying = true;
//  while (keepPlaying) {
//    var bet = prompt('Place your bets(between $5 and $10 please)!'); //TODO: do a check to make sure they don't bet an amount greater than their bankroll.
//    var guess = prompt('Now guess a number between 1 and 10!');
//    var answer = randomNumGen(1,10);

//    if (guess === answer) {
//       player.bankroll += bet;
//       alert("You are correct! You won $" + bet + "! You now have $" + player.bankroll + ".");
//    } else if (guess > (answer - 1) && guess < (answer + 1)) { 
//      alert("The answer was " + answer +  "! You were off by just 1! You will still retain your previous balance of $" + player.bankroll + ".");  
//    } else {
//      player.bankroll -= bet;
//      alert("Wrong! The answer was " + answer + "! You lost $" + bet + "! Your balance is now $" + player.bankroll + ".");
//    }
//    if (player.bankroll <= 0) {
//      alert("You're bankrupt!");
//      keepPlaying = false;
//    } else {
//    keepPlaying = confirm('Make another bet?');
//    }
});
