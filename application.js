var player = {
  bankroll: 100
};

function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var keepPlaying = true;

while (keepPlaying) {
  var bet = prompt('Place your bets(between $5 and $10 please)!'); //TODO: do a check to make sure they don't bet an amount greater than their bankroll.
  var guess = prompt('Now guess a number between 1 and 10!');
  var answer = randomNumGen(1,10);

  if (guess === answer) {
     player.bankroll += bet;
     alert("You are correct! You won $" + bet + "! You now have $" + player.bankroll + ".");
  } else if (guess > (answer - 1) && guess < (answer + 1)) { 
    alert("The answer was " + answer +  "! You were off by just 1! You will still retain your previous balance of $" + player.bankroll + ".");  
  } else {
    player.bankroll -= bet;
    alert("Wrong! The answer was " + answer + "! You lost $" + bet + "! Your balance is now $" + player.bankroll + ".");
  }
  if (player.bankroll <= 0) {
    alert("You're bankrupt!");
    keepPlaying = false;
  } else {
  keepPlaying = confirm('Make another bet?');
  }
}
