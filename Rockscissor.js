let humanScore = 0;
let computerScore = 0;

function play(humanPlay, cheatMode = false) {
    const getComputerPlay = function() {
        if (cheatMode) {
            return 'scissors';
        }
        const random = Math.random();
        if (random < 0.34) return 'rock';
        if (random < 0.67) return 'paper';
        return 'scissors';
    };

    const displayResult = (outcome) => {
        console.log(`You ${outcome === 'win' ? 'win' : outcome === 'tie' ? 'tied' : 'lose'}.`);
    };

    const computerPlay = getComputerPlay();

    console.log(`You played ${humanPlay}. The bot played ${computerPlay}.`);

    const outcome = humanPlay === computerPlay ? 'tie' :
                    (humanPlay === 'rock' && computerPlay === 'scissors') ||
                    (humanPlay === 'paper' && computerPlay === 'rock') ||
                    (humanPlay === 'scissors' && computerPlay === 'paper') ? 'win' : 'lose';

    outcome === 'win' ? humanScore++ :
    outcome === 'lose' ? computerScore++ : null;

    displayResult(outcome);

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

play('rock');
play('paper');
play('scissors');


//cheat mode
play('rock', true);
play('paper', true);
play('scissors', true);
