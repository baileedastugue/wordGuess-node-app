var inquirer = require("inquirer");
var Word = require("./word");
var wordList = ["broach", "travesty", "stipple", "gorge", "wince", "garble", "aver", "impetuous", "lachrymose", "propinquity", "caustic", "coda", "precepts"];
var guess;
var randomWord;
var numRight = 0;
var chancesLeft = 10;
var rightThisGuess = 0;
var incorrectArray = [];


function startGame() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    pickedWord = new Word();
    pickedWord.createArray(randomWord);
       // when concatenating with a string, JS automatically calls `toString`
    console.log(pickedWord.letterArray.join(' '));
    console.log(randomWord);
    promptUser();
}

startGame();

function evaluateGuess () {
    pickedWord.callCheck(guess);
    rightThisGuess = 0;
    for (var i = 0; i < pickedWord.letterArray.length; i++) {
        if (pickedWord.letterArray[i].letterGuessed) {
            rightThisGuess += 1;
        }
    }
    if (rightThisGuess > numRight) {
        numRight = rightThisGuess;
        if (numRight === pickedWord.letterArray.length) {
            console.log("You won! \nNew Game Started!");
            startGame();
        }
        else {
            console.log("Correct!");
            promptUser();
        }
    }
    else {
        chancesLeft -= 1;
        if (chancesLeft > 0) {
            incorrectArray.push(guess);
            console.log("Incorrect! " + chancesLeft + " chances left to guess! \nLetters you've already guessed: " + incorrectArray.join(", "));
            promptUser();
        }
        else {
            console.log("Game Over! Better luck next time. Your word was: " + randomWord + ". \nNew Game Started!");
            startGame();
        }
    }
}

// promptUser();
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
        guess = response.char;
        evaluateGuess();
    })
}

// var incorrectGuess = "Wrong choice! " + this.guessesLeft + " guesses remaining";
// console.log(incorrectGuess);

// var correctGuess = "Correct guess!";
// console.log(correctGuess);