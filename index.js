var inquirer = require("inquirer");
var Word = require("./word");
var wordList = ["broach", "travesty", "stipple", "gorge", "wince", "garble", "aver", "impetuous", "lachrymose", "propinquity", "caustic", "coda", "precepts"];
var numTrue = 0;
var guessesLeft = 10;
var randomWord;

function startGame() {
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    pickedWord = new Word();
    pickedWord.createArray(randomWord);
       // when concatenating with a string, JS automatically calls `toString`
    console.log(pickedWord.letterArray.join(' '));
    promptUser();
}

startGame();

function evaluateGuess () {
    var aCorrectGuess = false;
    for (var i = 0; i < pickedWord.letterArray.length; i++) {
        if (pickedWord.letterArray[i].letterGuessed) {
            aCorrectGuess = true;
        }
    } 
    if (aCorrectGuess) {
        console.log("correct guess");
    }
    promptUser();
    // console.log(pickedWord.letterArray);
    // if (pickedWord.letterArray.indexOf("_") == -1) {
    //     console.log("you won!")
    //     startGame();
    // }
    // else {
    //     promptUser();
    // }    
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
        pickedWord.callCheck(response.char);
        evaluateGuess();
    })
}

// var incorrectGuess = "Wrong choice! " + this.guessesLeft + " guesses remaining";
// console.log(incorrectGuess);

// var correctGuess = "Correct guess!";
// console.log(correctGuess);