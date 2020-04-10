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
var thisArray = [];

function Letter (underlyingChar, letterGuessed) {
    this.underlyingChar = underlyingChar;
    this.letterGuessed = false; 
    this.beenGuessed = function() {
        if (letterGuessed) {
            return underlyingChar;
        }
        else {
            return console.log("_");
        }
    }
    this.checkGuess = function (char) {
        if(this.underlyingChar === char) {
            this.letterGuessed = true;
            this.beenGuessed();
        }
    }
}

for (var i = 0; i < sampleArray.length; i++){
    thisArray[i] = new Letter(sampleArray[i]);
}

console.log(thisArray[1].letterGuessed);

// var inquirer = require("inquirer");
// inquirer.prompt([
//     {
//         type: "input",
//         name: "char",
//         message: "guess a letter",
//         validate: function(value) {
//             if (value.length == 1 && isNaN(value)) {
//                 return true;
//             }
//             return false;
//         } 
//     }
// ]).then (function(response) {
//     guessedChar = response.char; 
//     console.log(0);
// })


