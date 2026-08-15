// Favorite Movie Guessing Game logic
const favMovie = "Avatar";
let guess = prompt("Guess my favorite movie (or type 'quit' to exit):");

while (guess.toLowerCase() !== favMovie.toLowerCase()) {
    if (guess.toLowerCase() === "quit") {
        console.log("You gave up! Game over.");
        break;
    }
    guess = prompt("Wrong guess. Please try again:");
}

if (guess.toLowerCase() === favMovie.toLowerCase()) {
    console.log("Congrats! You guessed it right!");
}
