let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const result = document.getElementById('result');

    if (userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a number between 1 to 100.';
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        result.textContent = 'Too high! Try again.';
    } else {
        result.textContent = 'Congratulations! You guessed it!';
    }
}
