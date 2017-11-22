/* Steve DeNault
You're creating a numbers game. Please modify the guess() function as follows:
1. If the user guesses a number greater than the secret number, tell the user their guess is too high (already done for you).
2. If the user guesses a number less than the secret number, tell the user their guess is too low.
3. If they guess the number, tell them they win!

If/else constructions. Guess function calls incrementGuesses function
*/

let numberOfGuesses = 0
const secretNumber = parseInt(Math.random() * 100);
document.getElementById("secret").innerHTML = secretNumber;

const incrementGuesses = () => {
    ++numberOfGuesses
    document.getElementById("guesses").innerHTML = "You have guessed " + numberOfGuesses + " time(s).";
}

const guess = () => {
    incrementGuesses()
    const guess = document.getElementById("guess").value;

    // modify the code below to complete the task
    if ( guess > secretNumber) {
      document.getElementById("output").innerHTML = guess + " is too big";
    }  else if ( guess < secretNumber) {
      document.getElementById("output").innerHTML = guess + " is too small";
    } else if ( guess == secretNumber) {
      document.getElementById("output").innerHTML = guess + " is right, you win";
    }

}
