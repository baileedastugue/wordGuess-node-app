var inquirer = require("inquirer");
var Word = require("./word");

// global variables
var guess;
var numRight = 0;
var chancesLeft = 10;
var incorrectArray = [];
var correctArray = [];
// array of potential words
var wordList = ["broach", "travesty", "stipple", "gorge", "wince", "garble", "aver", "impetuous", "lachrymose", "propinquity", "caustic", "coda", "precepts"];
var randomWord;

startGame();

function startGame() {
    
    // randomly choosed a word from the array 
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    
    // uses constructor from word.js
    pickedWord = new Word();
    pickedWord.createArray(randomWord);
    
    // when concatenating with a string, JS automatically calls toString() from letter.js
    console.log(pickedWord.letterArray.join(' '));
    
    promptUser();
}

// resets game after a game has been won or lost
function resetGame() {
    numRight = 0;
    chancesLeft = 10;
    incorrectArray = [];
    correctArray = [];
}

function evaluateGuess () {
    // evaluates whether the user's guess is in the word or not
    pickedWord.callCheck(guess);

    // resets the number of correct guesses each time the user inputs a letter
    var rightThisGuess = 0;
    
    // determines how many of the letters have been correctly guessed
    for (var i = 0; i < pickedWord.letterArray.length; i++) {
        if (pickedWord.letterArray[i].letterGuessed) {
            rightThisGuess += 1;
        }
    }

    // determines if the number of NEW correctly guessed letter exceeds previous rounds
    if (rightThisGuess > numRight) {
        numRight = rightThisGuess;

        // determines if the user wins or should proceed with continued guessing
        // if the user has correctly guessed all words, they win and the game restarts with a new word
        if (numRight === pickedWord.letterArray.length) {
            console.log("You won! \nNew Game Started!");
            resetGame();
            startGame();
        }
        else {
            console.log("Correct!");
            correctArray.push(guess);
            promptUser();
        }
    }

    // determines whether the letter has already been guessed or not
    else {
        // if the letter guessed is not in the word and has been played before,
        // it does not impact the user's number of chances left
        if (incorrectArray.includes(guess)) {
            console.log("You've already guessed the letter " + guess);
            promptUser();
        }
        // if the letter is in the word but has been played before,
        // the user is prompted to guess again
        else if (correctArray.includes(guess)) {
            promptUser();
        }
        // if the user selects a letter that has not been previously played
        // and is not in the word, their chances left to guess decreases
        else {
            chancesLeft -= 1;

            // if they haven't guessed incorrectly 10 times,
            // they are prompted to guess again
            if (chancesLeft > 0) {
                incorrectArray.push(guess);
                console.log("Incorrect! " + chancesLeft + " chances left to guess! \nLetters you've already guessed: " + incorrectArray.join(", "));
                promptUser();
            }
            // if they have guessed incorrectly 10 times,
            // this game is over and the game restarts with a new word
            else {
                console.log("Game Over! Better luck next time. Your word was: " + randomWord + ". \nNew Game Started!");
                resetGame();
                startGame();
            }
        }
    }
}

// prompts the user to guess a letter
function promptUser() {
    inquirer.prompt([
        {
            type: "input",
            name: "char",
            message: "guess a letter",
            validate: function(value) {
                if (value.length == 1 && isNaN(value)) {
                    return true;
                }
                return false;
            } 
        }
    ]).then (function(response) {
        // stores the user's most recent guess
        guess = response.char;
        evaluateGuess();
    })
}
