function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('computer-choice').innerText = computerChoice.toUpperCase();

    const result = getResult(choice, computerChoice);
    document.getElementById('result-message').innerText = result;
}

function getResult(player, computer) {
    if (player === computer) {
        return '¡Empate!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return '¡Ganaste!';
    } else {
        return '¡Perdiste!';
    }
}