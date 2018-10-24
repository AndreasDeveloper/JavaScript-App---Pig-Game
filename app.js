/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variable Declarations
var scores, roundScore, activePlayer;

// Variable Initalizations
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Hides DICE Image at the begining of the game
document.querySelector('.dice').style.display = 'none';

// Displays all the results as 0 at the beginning of the game.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// 2 Ways of working with Events and functions
//document.querySelector('.btn-roll').addEventListener('click', btn); EXTERNAL FUNCTION EXAMPLE
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Do Something Here .. | ANONYMOUS FUNCTION

    // Get Random Number
    var dice =  Math.floor(Math.random() * 6) + 1;  // Declared inside of the function as its not needed in global scope

    // Display the Dice Number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    // Update the round score IF The rolled number was not a 1

});


// --- FOR LATER USAGE --- \\

//document.querySelector('#current-' + activePlayer).textContent = dice;    // Uses DOM Manipulation to show current number of dice in red block element.
//document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em>'; | EXAMPLE