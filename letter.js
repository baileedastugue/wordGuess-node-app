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

function Letter (underlyingChar) {
    this.underlyingChar = underlyingChar;
    this.guessesLeft = 10;
    this.letterGuessed = false; 
    this.toString = function() {
        if (this.letterGuessed) {
            return this.underlyingChar;
        }
        else {
            var underscore = "_";
            return underscore;
        }
    }
    this.checkGuess = function (char) {
        if(this.underlyingChar == char) {
            this.letterGuessed = true;
            return true;
        }
        else {
            this.guessesLeft -= 1;
            return false;
        }
    }
}

module.exports = Letter;