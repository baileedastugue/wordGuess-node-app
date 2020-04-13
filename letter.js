// a constructor
function Letter (underlyingChar) {
    // stores the underlying character for each letter in the word
    this.underlyingChar = underlyingChar;
    
    // stores whether the letter has been guessed or not
    this.letterGuessed = false;
    
    // returns the underlying character or an underscore
    // depends on the user's guess
    this.toString = function() {
        if (this.letterGuessed) {
            return this.underlyingChar;
        }
        else {
            var underscore = "_";
            return underscore;
        }
    }
    // checks the guess against the underlying character
    this.checkGuess = function (char) {
        if(this.underlyingChar == char) {
            this.letterGuessed = true;
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Letter;