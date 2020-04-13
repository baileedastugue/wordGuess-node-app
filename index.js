var inquirer = require("inquirer");
var Word = require("./word");
var wordList = ["broach", "travesty", "stipple", "gorge", "wince", "garble", "aver", "impetuous", "lachrymose", "propinquity", "caustic", "coda", "precepts"];

function startGame() {
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    pickedWord = new Word();
    pickedWord.createArray(randomWord);
    promptUser();
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
        pickedWord.callCheck(response.char);
        console.log(pickedWord.letterArray.join(' '));
        promptUser();
    })
}