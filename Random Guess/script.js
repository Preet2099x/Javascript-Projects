const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;
const guesses = [];

const result = document.getElementById("result")
const totalGuessleft = document.querySelector('.lastResult')
const previousGuesses = document.querySelector('.guesses');
let totalGuess = 10;



const submitGuess = () => {
  if (totalGuess > 0) {
    const guess = document.getElementById("guessField").value;
    const lowOrhigh = document.querySelector(".lowOrHi");
    if (guess == answer) {
      result.innerHTML ="You guessed correctly!"
      lowOrhigh.style.display = "none";
    } else {
      lowOrhigh.innerHTML = guess < answer ? "Go Higher" : "Go Lower";
    }
    guesses.push(guess);
    previousGuesses.innerHTML = guesses.join(", ");
    totalGuess--;
    totalGuessleft.innerHTML=totalGuess;
  }
  else
  {
    result.innerHTML = "You're out of guesses"
  }
}




  
