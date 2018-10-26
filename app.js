/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variable Declarations | Global Scope
var scores, roundScore, activePlayer, gamePlaying;

// Variable Initalizations
init(); // scores, roundScore, activePlayer.

// | -- EVENT LISTENER | ROLLING THE DICE -- |  - Button Roll. Events when rolling the dice \\
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Do Something Here .. | ANONYMOUS FUNCTION

    // Check if game is playing. Disables if player won the game
    if (gamePlaying) {

        // Get Random Number
        var dice =  Math.floor(Math.random() * 6) + 1;  // Declared inside of the function as its not needed in global scope

        // Display the Dice Number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        // Update the round score IF The rolled number was not a 1
        if (dice !== 1 ) {
            // Add Score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Change Player
            nextPlayer();
        }
    }
});

// -- EVENT LISTENER | HOLDING THE SCORE -- | - Button Hold. Holds the score. \\
document.querySelector('.btn-hold').addEventListener('click', function() {

    // Check if game is playing. Disables if player won the game
    if (gamePlaying) {

        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if Player did won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;    // End the game
        } else {
            // Change Player (If got 1, or picked hold)
            nextPlayer();
        }
    }
});

// -- EVENT LISTENER | NEW GAME -- | - Button New. Starts new game. \\
document.querySelector('.btn-new').addEventListener('click', init);

// -- FUNCTION -- | Changing The Player
function nextPlayer() {

    // Change Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // Sets score back to 0 if dice rolls 1 in UI
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Change Player Active Status > Using Toggle Property
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    /*document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');*/

    // Removes Dice IMG when dice hits 1
    diceDOM.style.display = 'none';
}

//  -- FUNCTION -- | Initiliaze New Game
function init() {

    // Sets gamePlaying Var to true
    gamePlaying = true;

    // Sets all score's back to 0
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    // Hides DICE Image at the begining of the game
    document.querySelector('.dice').style.display = 'none';

    // Displays all the results as 0 at the beginning of the game.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Write back player 1 & 2 names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Removes Winner Class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    // Removes Active Class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // Adds Active Class to the first player
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}


// --- FOR LATER USAGE --- \\

//document.querySelector('#current-' + activePlayer).textContent = dice;    // Uses DOM Manipulation to show current number of dice in red block element.
//document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em>'; | EXAMPLE