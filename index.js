var inquirer = require("inquirer");
var Word = require("./word");
var wordList = ["broach", "travesty", "stipple", "gorge", "wince", "garble", "aver", "impetuous", "lachrymose", "propinquity", "caustic", "coda", "precepts"]
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

function startGame() {
    pickedWord = new Word();
    console.log(randomWord);
    pickedWord.createArray(randomWord);
}

startGame();

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
        for (var i = 0; i < letterArray.length; i++) {
            letterArray[i].checkGuess(response.char);
            
        }
        
        promptUser();
    })
}