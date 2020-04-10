// create a constructor, Letter
// display an underlying character or a blank placeholder
    // underlyingChar (string)
    // letterGuessed (boolean)
    // function ():
        // if letter has been guessed --> return letter
        // if letter has not been guessed --> return underscore
    // function (char): 
        // checks it against underlyingChar
        // if char === underlyingChar --> letterGuessed = true
        // call other function

var guessedChar;
var sampleWord = "apple";
var sampleArray = sampleWord.split("");
var letterArray = [];

function Letter (underlyingChar, letterGuessed) {
    this.underlyingChar = underlyingChar;
    this.letterGuessed = false; 
    this.checkGuess = function (char) {
        if(this.underlyingChar == char) {
            this.letterGuessed = true;
        }
    }
    this.toString = function() {
        if (this.letterGuessed) {
           return this.underlyingChar;
        }
        else {
            var underscore = "_";
            return underscore;
        }
    }
}

// creates an array of letters using the constructor 
for (var i = 0; i < sampleArray.length; i++){
    letterArray[i] = new Letter(sampleArray[i]);
}


var output = [];
var inquirer = require("inquirer");
promptUser();
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
        console.log(letterArray.join(' '));
        promptUser();
    })
}
